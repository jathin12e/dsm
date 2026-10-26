import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { WheatSprigBackdrop } from './Illustrations.jsx';

const EASE = [0.22, 1, 0.36, 1];

/** Header band for inner pages, with breadcrumb navigation. */
export default function PageHero({ title, subtitle, crumb, children }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <WheatSprigBackdrop className="page-hero__sprig" />
      <div className="container page-hero__inner">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
            </li>
            <li aria-current="page">{crumb ?? title}</li>
          </ol>
        </nav>
        <motion.h1
          id="page-title"
          className="page-hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="page-hero__subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
