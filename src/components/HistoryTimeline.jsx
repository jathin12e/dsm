import { motion } from 'motion/react';
import { ESTABLISHED_YEAR, yearsSinceEstablished } from '../data/ministryInfo.js';

const EASE = [0.22, 1, 0.36, 1];

export default function HistoryTimeline({ items }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="timeline">
      <ol className="timeline__list">
        {items.map((item, i) => (
          <motion.li
            key={item.year}
            className={`timeline__item${item.highlight ? ' timeline__item--highlight' : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: EASE }}
          >
            <span className="timeline__marker" aria-hidden="true" />
            <div className="timeline__card">
              <p className="timeline__year">{item.year}</p>
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__text">{item.text}</p>
              {item.highlight && <span className="status-tag">Ministry established</span>}
            </div>
          </motion.li>
        ))}
      </ol>
      <p className="timeline__footnote">
        {ESTABLISHED_YEAR} – {currentYear}: <strong>{yearsSinceEstablished()} years</strong> since Dying Seed
        Ministries was established.
      </p>
    </div>
  );
}
