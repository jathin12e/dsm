import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import { navLinks, callingLinks } from '../data/navigation.js';
import { ministryInfo, scripture, legalLinks, ESTABLISHED_YEAR } from '../data/ministryInfo.js';
import { offices } from '../data/contactInfo.js';
import '../styles/Footer.css';

const footerQuickLinks = navLinks.map((l) => (l.to === '/contact' ? { ...l, label: 'Contact' } : l));

export default function Footer() {
  const year = new Date().getFullYear();
  const verifiedOffices = offices.filter((o) => o.verified);

  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__identity">
          <Link to="/" aria-label="Dying Seed Ministries — Home" className="footer__brand">
            <Logo light showTagline={false} sizes="(min-width: 640px) 128px, 112px" />
          </Link>
          <p className="footer__tagline">“{ministryInfo.tagline}”</p>
          <p className="footer__est">Established in {ESTABLISHED_YEAR}</p>
          <figure className="footer__verse">
            <blockquote>“{scripture.text}”</blockquote>
            <figcaption>— {scripture.reference}</figcaption>
          </figure>
        </div>

        <nav className="footer__col" aria-labelledby="footer-quick">
          <h2 id="footer-quick" className="footer__heading">
            Quick Links
          </h2>
          <ul className="footer__list">
            {footerQuickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-labelledby="footer-calling">
          <h2 id="footer-calling" className="footer__heading">
            Our Calling
          </h2>
          <ul className="footer__list">
            {callingLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Contact</h2>
          <p className="footer__contact-line">
            <MapPin size={18} aria-hidden="true" />
            <span>
              <strong>Head Office</strong>
              <br />
              Chennai, Tamil Nadu
            </span>
          </p>
          {verifiedOffices.map((office) =>
            office.phones.map((phone) => (
              <p className="footer__contact-line" key={`${office.id}-${phone.tel}`}>
                <Phone size={18} aria-hidden="true" />
                <span>
                  {office.city}: <a href={`tel:${phone.tel}`}>{phone.display}</a>
                </span>
              </p>
            ))
          )}
          <p className="footer__offices">Offices in Chennai, Bengaluru &amp; Madurai</p>
          <Link to="/contact" className="btn btn--outline-light footer__contact-btn">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} Dying Seed Ministries. All Rights Reserved.
          </p>
          {legalLinks.length > 0 && (
            <ul className="footer__legal">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
