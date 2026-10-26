import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HeroArt } from './Illustrations.jsx';
import { ministryInfo, media, scripture, ESTABLISHED_YEAR } from '../data/ministryInfo.js';

const EASE = [0.22, 1, 0.36, 1];
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <motion.p className="eyebrow" {...fadeUp(0)}>
            Serving Christ since {ESTABLISHED_YEAR}
          </motion.p>
          <motion.h1 id="hero-title" className="hero__title" {...fadeUp(0.08)}>
            A Seed of Faith. <span className="hero__title-accent">A Harvest of Hope.</span>
          </motion.h1>
          <motion.p className="hero__lead" {...fadeUp(0.2)}>
            {ministryInfo.summary}
          </motion.p>

          <div className="hero__actions">
            <motion.div {...fadeUp(0.32)}>
              <Link to="/about" className="btn btn--primary btn--lg">
                Discover Our Story
                <ArrowRight className="btn__arrow" size={18} aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div {...fadeUp(0.4)}>
              <Link to="/ministries" className="btn btn--outline btn--lg">
                Explore Our Ministries
              </Link>
            </motion.div>
          </div>

          <motion.ul className="hero__pillars" aria-label="Our commitments" {...fadeUp(0.5)}>
            <li>Rooted in Faith</li>
            <li>Committed to Service</li>
            <li>Dedicated to the Gospel</li>
          </motion.ul>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        >
          {media.heroImage ? (
            <img className="hero__photo" src={media.heroImage.src} alt={media.heroImage.alt} fetchpriority="high" />
          ) : (
            <HeroArt />
          )}
          <div className="hero__badge" aria-hidden="true">
            <span className="hero__badge-label">Est.</span>
            <span className="hero__badge-year">{ESTABLISHED_YEAR}</span>
          </div>
          <figure className="hero__verse">
            <blockquote>“…if it dies, it produces many seeds.”</blockquote>
            <figcaption>{scripture.reference}</figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
