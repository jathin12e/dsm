import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CircleAlert, CircleCheck, Copy, Info, LoaderCircle, Send } from 'lucide-react';
import { contactConfig, contactSubjects } from '../data/contactInfo.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;
const MESSAGE_MAX = 2000;

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '', website: '' };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = 'Please enter a valid email address, for example name@example.com.';
  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number, or leave this field empty.';
  if (!values.subject) errors.subject = 'Please choose a subject.';
  if (values.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  else if (values.message.length > MESSAGE_MAX) errors.message = `Please keep your message under ${MESSAGE_MAX} characters.`;
  return errors;
}

/**
 * Contact form with client-side validation.
 * Submission only happens when `contactConfig.formEndpoint` is configured;
 * otherwise the visitor is told plainly that nothing has been sent.
 */
export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const presetSubject = contactSubjects.some((s) => s.value === searchParams.get('subject'))
    ? searchParams.get('subject')
    : '';

  const [values, setValues] = useState({ ...EMPTY, subject: presetSubject });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  // idle | submitting | success | error | unconfigured
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);
  const statusRef = useRef(null);

  const endpoint = contactConfig.formEndpoint;

  const update = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
    if (status !== 'idle' && status !== 'submitting') setStatus('idle');
  };

  const blur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const focusStatus = () => requestAnimationFrame(() => statusRef.current?.focus());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });

    if (Object.keys(found).length > 0) {
      formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    // Honeypot: real visitors never see or fill the "website" field.
    if (values.website) return;

    if (!endpoint) {
      setStatus('unconfigured');
      focusStatus();
      return;
    }

    setStatus('submitting');
    try {
      const subjectLabel = contactSubjects.find((s) => s.value === values.subject)?.label;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          subject: subjectLabel,
          message: values.message.trim(),
        }),
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      setStatus('success');
      setValues({ ...EMPTY });
      setTouched({});
    } catch {
      setStatus('error');
    }
    focusStatus();
  };

  const copyMessage = async () => {
    const subjectLabel = contactSubjects.find((s) => s.value === values.subject)?.label ?? '';
    const text = `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || '—'}\nSubject: ${subjectLabel}\n\n${values.message}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable — the message remains in the form.
    }
  };

  const fieldProps = (name) => ({
    id: `cf-${name}`,
    name,
    value: values[name],
    onChange: update,
    onBlur: blur,
    'aria-invalid': errors[name] && touched[name] ? true : undefined,
    'aria-describedby': errors[name] && touched[name] ? `cf-${name}-error` : undefined,
  });

  const fieldError = (name) =>
    errors[name] && touched[name] ? (
      <p id={`cf-${name}-error`} className="field__error">
        <CircleAlert size={16} aria-hidden="true" />
        {errors[name]}
      </p>
    ) : null;

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="contact-form__title">
        Send Us a Message
      </h2>
      <p className="contact-form__intro">
        Fields marked <span aria-hidden="true">*</span>
        <span className="visually-hidden">with an asterisk</span> are required.
      </p>

      {!endpoint && (
        <p className="note contact-form__setup-note">
          <Info size={18} aria-hidden="true" />
          <span>
            Online messaging is being set up and is not yet connected. Until then, please contact one of our offices by
            phone.
          </span>
        </p>
      )}

      <div className="contact-form__grid">
        <div className="field">
          <label htmlFor="cf-name">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input type="text" autoComplete="name" required {...fieldProps('name')} />
          {fieldError('name')}
        </div>

        <div className="field">
          <label htmlFor="cf-email">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input type="email" autoComplete="email" inputMode="email" required {...fieldProps('email')} />
          {fieldError('email')}
        </div>

        <div className="field">
          <label htmlFor="cf-phone">
            Phone Number <span className="field__optional">(optional)</span>
          </label>
          <input type="tel" autoComplete="tel" inputMode="tel" {...fieldProps('phone')} />
          {fieldError('phone')}
        </div>

        <div className="field">
          <label htmlFor="cf-subject">
            Subject <span aria-hidden="true">*</span>
          </label>
          <select required {...fieldProps('subject')}>
            <option value="">Choose a subject</option>
            {contactSubjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          {fieldError('subject')}
        </div>

        <div className="field field--full">
          <label htmlFor="cf-message">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea rows={6} maxLength={MESSAGE_MAX} required {...fieldProps('message')} />
          <p className="field__hint" aria-hidden="true">
            {values.message.length}/{MESSAGE_MAX}
          </p>
          {fieldError('message')}
        </div>

        {/* Spam honeypot — hidden from people and assistive technology. */}
        <div className="field--honeypot" aria-hidden="true">
          <label htmlFor="cf-website">Website</label>
          <input id="cf-website" type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update} />
        </div>
      </div>

      <div className="contact-form__footer">
        <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <LoaderCircle className="spin" size={18} aria-hidden="true" /> Sending…
            </>
          ) : (
            <>
              Send Message <Send size={18} aria-hidden="true" />
            </>
          )}
        </button>
      </div>

      <div ref={statusRef} tabIndex={-1} className="contact-form__status" role="status" aria-live="polite">
        {status === 'unconfigured' && (
          <div className="form-alert form-alert--info">
            <Info size={20} aria-hidden="true" />
            <div>
              <p>
                <strong>Your message has not been sent.</strong> Online messaging is not yet connected. Please call one of
                the offices listed on this page. You can copy your message below so it is not lost.
              </p>
              <button type="button" className="text-link share-button" onClick={copyMessage}>
                {copied ? 'Message copied' : 'Copy my message'}
                <Copy size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
        {status === 'success' && (
          <div className="form-alert form-alert--success">
            <CircleCheck size={20} aria-hidden="true" />
            <p>
              <strong>Thank you — your message has been sent.</strong> We will respond as soon as we are able.
            </p>
          </div>
        )}
        {status === 'error' && (
          <div className="form-alert form-alert--error">
            <CircleAlert size={20} aria-hidden="true" />
            <p>
              <strong>Your message could not be sent.</strong> Please try again later, or contact one of our offices by
              phone.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
