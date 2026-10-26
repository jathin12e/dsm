import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import { Info } from 'lucide-react';
import { RevealGroup, RevealItem } from './AnimatedSection.jsx';

function Counter({ value, prefix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) {
      setDisplay(value);
      return undefined;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} aria-hidden="true">
      {prefix}
      {display}
    </span>
  );
}

/** Statistic cards. While `verified` is false every figure is labelled as historically reported. */
export default function MissionStats({ items, verified, note }) {
  return (
    <div className="stats">
      <RevealGroup as="dl" className="stats__grid">
        {items.map((stat) => (
          <RevealItem key={stat.label} className="stats__card">
            <dt className="stats__label">
              {stat.label}
              {stat.detail && <span className="stats__detail">{stat.detail}</span>}
            </dt>
            <dd className="stats__value">
              <Counter value={stat.value} prefix={stat.prefix} />
              <span className="visually-hidden">
                {stat.detail ? `${stat.detail} ` : ''}
                {stat.value}
              </span>
            </dd>
            {!verified && <span className="stats__flag">Historically reported</span>}
          </RevealItem>
        ))}
      </RevealGroup>
      {!verified && (
        <p className="note stats__note">
          <Info size={18} aria-hidden="true" />
          <span>{note}</span>
        </p>
      )}
    </div>
  );
}
