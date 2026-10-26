import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { handleContact } from './contact.js';

const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const PORT = Number(process.env.PORT) || 3000;

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1); // Render sits behind a proxy; needed for correct client IPs

app.post('/api/contact', express.json({ limit: '20kb' }), handleContact);
app.all('/api/*', (req, res) => res.status(404).json({ error: 'Not found' }));

// Hashed build assets never change, so they can be cached for a year.
app.use('/assets', express.static(path.join(DIST, 'assets'), { immutable: true, maxAge: '1y' }));
app.use(express.static(DIST, { maxAge: '1h' }));

// Single-page app: every other route is handled by React Router.
app.get('*', (req, res) => res.sendFile(path.join(DIST, 'index.html')));

app.listen(PORT, () => {
  console.log(`Dying Seed Ministries running at http://localhost:${PORT}`);
  if (!process.env.RESEND_API_KEY) console.warn('Warning: RESEND_API_KEY is not set — the contact form cannot send.');
});
