import { useEffect, useRef, useState } from 'react';
import { Check, Share2 } from 'lucide-react';

/** Uses the native share sheet where available, otherwise copies the page link. */
export default function ShareButton({ label = 'Share this page', className = 'text-link' }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleShare = async () => {
    const data = {
      title: 'Dying Seed Ministries',
      text: 'A Seed of Faith. A Harvest of Hope. Serving Christ through discipleship and mission.',
      url: window.location.origin,
    };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      // Share sheet dismissed or clipboard unavailable — nothing to do.
    }
  };

  return (
    <button type="button" className={`${className} share-button`} onClick={handleShare}>
      {copied ? 'Link copied' : label}
      {copied ? <Check size={16} aria-hidden="true" /> : <Share2 size={16} aria-hidden="true" />}
      <span className="visually-hidden" aria-live="polite">
        {copied ? 'Website link copied to clipboard' : ''}
      </span>
    </button>
  );
}
