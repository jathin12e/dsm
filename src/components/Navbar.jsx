import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import InstallAppButton from './InstallAppButton.jsx';
import { navLinks } from '../data/navigation.js';
import '../styles/Navbar.css';

const DESKTOP_QUERY = '(min-width: 1200px)';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  // Close the menu when the viewport grows to the desktop layout.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // While open: lock page scroll, make the page behind inert, support Escape.
  useEffect(() => {
    if (!open) return undefined;
    const background = [document.getElementById('main-content'), document.querySelector('.site-footer')];
    document.body.classList.add('no-scroll');
    background.forEach((el) => el && (el.inert = true));
    panelRef.current?.querySelector('a')?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      background.forEach((el) => el && (el.inert = false));
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <nav className="container nav" aria-label="Main navigation">
          <Link to="/" className="nav__brand" aria-label="Dying Seed Ministries — Home">
            <Logo />
          </Link>

          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end} className="nav__link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <Link to="/support" className="btn btn--gold nav__cta">
              Get Involved
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="nav__toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              ref={panelRef}
              className="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="mobile-menu__links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.04 * i }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.end}
                      className="mobile-menu__link"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                      <ArrowRight size={18} aria-hidden="true" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <Link to="/support" className="btn btn--gold btn--lg mobile-menu__cta" onClick={() => setOpen(false)}>
                Get Involved
              </Link>
              <InstallAppButton className="btn btn--outline btn--lg mobile-menu__cta" />
              <p className="mobile-menu__note">Head Office: Chennai, Tamil Nadu</p>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-backdrop"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
