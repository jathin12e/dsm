import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

let deferredPrompt = null;
const listeners = new Set();
const notify = () => listeners.forEach((fn) => fn(!!deferredPrompt));

// Capture the browser's install prompt once, as early as possible.
if (typeof window !== 'undefined') {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    notify();
  });
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    notify();
  });
}

/** "Install app" button — only rendered when the browser allows installing the site. */
export default function InstallAppButton({ className = 'btn btn--outline' }) {
  const [canInstall, setCanInstall] = useState(!!deferredPrompt);

  useEffect(() => {
    listeners.add(setCanInstall);
    return () => listeners.delete(setCanInstall);
  }, []);

  if (!canInstall) return null;

  const install = async () => {
    const prompt = deferredPrompt;
    if (!prompt) return;
    prompt.prompt();
    await prompt.userChoice;
    deferredPrompt = null;
    notify();
  };

  return (
    <button type="button" className={className} onClick={install}>
      <Download size={18} aria-hidden="true" />
      Install App
    </button>
  );
}
