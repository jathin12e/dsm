import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection.jsx';
import { WheatSprigBackdrop } from './Illustrations.jsx';

/**
 * Closing call-to-action panel.
 * `actions`: [{ label, to, variant: 'gold' | 'outline-light' }]
 */
export default function CallToAction({ eyebrow, title, text, actions = [] }) {
  return (
    <section className="section cta-section" aria-labelledby="cta-title">
      <div className="container">
        <AnimatedSection className="cta">
          <WheatSprigBackdrop className="cta__sprig" />
          <div className="cta__content">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 id="cta-title" className="cta__title">
              {title}
            </h2>
            {text && <p className="cta__text">{text}</p>}
          </div>
          <div className="cta__actions">
            {actions.map((action, i) => (
              <Link key={action.label} to={action.to} className={`btn btn--lg btn--${action.variant ?? 'gold'}`}>
                {action.label}
                {i === 0 && <ArrowRight className="btn__arrow" size={18} aria-hidden="true" />}
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
