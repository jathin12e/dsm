import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the top on route changes, or to the element named in the URL hash
 * (e.g. /support#prayer-needs). Lazy-loaded pages may not have rendered yet,
 * so the hash target is retried briefly.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let attempts = 0;
    let timer;

    const tryScroll = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      } else if (attempts++ < 30) {
        timer = setTimeout(tryScroll, 50);
      }
    };

    timer = setTimeout(tryScroll, 0);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
