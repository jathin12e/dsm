import { contactSubjects } from '../src/data/contactInfo.js';

const RESEND_URL = 'https://api.resend.com/emails';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;
const SUBJECT_LABELS = new Set(contactSubjects.map((s) => s.label));

// Simple in-memory rate limit: at most 5 enquiries per IP every 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recent = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) {
    for (const [key, times] of recent) if (times.every((t) => now - t >= WINDOW_MS)) recent.delete(key);
  }
  return hits.length > MAX_PER_WINDOW;
}

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const clean = (v) => (typeof v === 'string' ? v.trim() : '');

function validate(body) {
  const data = {
    name: clean(body.name),
    email: clean(body.email),
    phone: clean(body.phone),
    subject: clean(body.subject),
    message: clean(body.message),
  };
  const errors = [];
  if (data.name.length < 2 || data.name.length > 100) errors.push('name');
  if (!EMAIL_PATTERN.test(data.email) || data.email.length > 254) errors.push('email');
  if (data.phone && !PHONE_PATTERN.test(data.phone)) errors.push('phone');
  if (!SUBJECT_LABELS.has(data.subject)) errors.push('subject');
  if (data.message.length < 10 || data.message.length > 2000) errors.push('message');
  return { data, errors };
}

function buildEmail({ name, email, phone, subject, message }) {
  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone || 'Not provided'],
    ['Enquiry type', subject],
  ];
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#202824;max-width:600px">
      <h2 style="color:#183D32;margin:0 0 16px">New website enquiry</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="color:#647168;font-weight:bold;vertical-align:top">${k}</td><td>${escapeHtml(v)}</td></tr>`
          )
          .join('')}
      </table>
      <h3 style="color:#183D32;margin:20px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6;margin:0">${escapeHtml(message)}</p>
      <hr style="border:none;border-top:1px solid #E4DED1;margin:24px 0 12px">
      <p style="color:#647168;font-size:13px;margin:0">Sent from the Dying Seed Ministries website contact form. Reply to this email to respond to ${escapeHtml(name)}.</p>
    </div>`;
  const text = `New website enquiry\n\n${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nMessage:\n${message}\n`;
  return { html, text };
}

export async function handleContact(req, res) {
  const body = req.body ?? {};

  // Honeypot field filled in: a bot. Pretend success, send nothing.
  if (clean(body.website)) return res.json({ ok: true });

  if (isRateLimited(req.ip)) {
    return res.status(429).json({ error: 'Too many messages. Please try again later.' });
  }

  const { data, errors } = validate(body);
  if (errors.length) return res.status(400).json({ error: 'Invalid input', fields: errors });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error('[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set');
    return res.status(503).json({ error: 'Messaging is not configured.' });
  }

  const { html, text } = buildEmail(data);
  try {
    const response = await fetch(RESEND_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'Dying Seed Ministries Website <onboarding@resend.dev>',
        to: [to],
        reply_to: data.email,
        subject: `Website enquiry: ${data.subject} — ${data.name}`,
        html,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error(`[contact] Resend responded ${response.status}: ${await response.text()}`);
      return res.status(502).json({ error: 'The message could not be sent.' });
    }
    return res.json({ ok: true });
  } catch (err) {
    console.error('[contact] Failed to reach Resend:', err.message);
    return res.status(502).json({ error: 'The message could not be sent.' });
  }
}
