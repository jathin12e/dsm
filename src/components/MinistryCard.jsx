import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/** Icon card with title, text and an optional link. */
export default function MinistryCard({ icon: Icon, title, text, to, linkLabel, headingLevel = 3, className = '' }) {
  const Heading = `h${headingLevel}`;
  return (
    <article className={`card ${className}`}>
      {Icon && (
        <span className="card__icon" aria-hidden="true">
          <Icon size={26} strokeWidth={1.6} />
        </span>
      )}
      <Heading className="card__title">{title}</Heading>
      <p className="card__text">{text}</p>
      {to && (
        <Link to={to} className="text-link card__link">
          {linkLabel}
          <ArrowRight size={16} aria-hidden="true" />
          <span className="visually-hidden"> — {title}</span>
        </Link>
      )}
    </article>
  );
}
