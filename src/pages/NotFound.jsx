import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { WheatOrnament } from '../components/Illustrations.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta({
    title: 'Page Not Found | Dying Seed Ministries',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <section className="section not-found" aria-labelledby="nf-title">
      <div className="container container--narrow not-found__inner">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>
        <WheatOrnament className="not-found__ornament" />
        <h1 id="nf-title" className="not-found__title">
          Page Not Found
        </h1>
        <p className="not-found__text">
          The page you are looking for may have moved or no longer exists. Let us help you find your way.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary btn--lg">
            Return Home <ArrowRight className="btn__arrow" size={18} aria-hidden="true" />
          </Link>
          <Link to="/contact" className="btn btn--outline btn--lg">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
