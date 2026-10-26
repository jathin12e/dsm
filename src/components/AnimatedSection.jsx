import { motion } from 'motion/react';

const EASE = [0.22, 1, 0.36, 1];
// "some" + a small bottom margin works for elements of any height, including
// ones taller than the viewport.
const VIEWPORT = { once: true, margin: '0px 0px -60px 0px' };

/** Fades and lifts its content into view once, as it scrolls into the viewport. */
export default function AnimatedSection({ as = 'div', delay = 0, y = 24, children, ...rest }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.55, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  );
}

const groupVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Container whose RevealItem children enter one after another. */
export function RevealGroup({ as = 'div', children, ...rest }) {
  const Component = motion[as];
  return (
    <Component variants={groupVariants} initial="hidden" whileInView="visible" viewport={VIEWPORT} {...rest}>
      {children}
    </Component>
  );
}

export function RevealItem({ as = 'div', children, ...rest }) {
  const Component = motion[as];
  return (
    <Component variants={itemVariants} {...rest}>
      {children}
    </Component>
  );
}
