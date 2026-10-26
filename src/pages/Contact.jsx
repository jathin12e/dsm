import { Building2, Info, MapPin, Phone, User } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import ContactForm from '../components/ContactForm.jsx';
import AnimatedSection, { RevealGroup, RevealItem } from '../components/AnimatedSection.jsx';
import { offices } from '../data/contactInfo.js';
import usePageMeta from '../hooks/usePageMeta.js';
import '../styles/Contact.css';

function OfficeCard({ office }) {
  return (
    <article className={`office${office.isHeadOffice ? ' office--head' : ''}`} aria-labelledby={`office-${office.id}`}>
      <div className="office__header">
        <span className="office__icon" aria-hidden="true">
          <Building2 size={22} strokeWidth={1.6} />
        </span>
        <div>
          <h2 id={`office-${office.id}`} className="office__name">
            {office.name}
          </h2>
          <p className="office__city">{office.city}</p>
        </div>
      </div>

      <address className="office__details">
        <p className="office__line">
          <MapPin size={18} aria-hidden="true" />
          <span>
            {office.address.map((line) => (
              <span key={line} className="office__address-line">
                {line}
              </span>
            ))}
          </span>
        </p>
        {office.contactPerson && (
          <p className="office__line">
            <User size={18} aria-hidden="true" />
            <span>
              <span className="office__label">Contact Person</span>
              {office.contactPerson}
            </span>
          </p>
        )}
        {office.phones.map((phone) => (
          <p className="office__line" key={phone.tel}>
            <Phone size={18} aria-hidden="true" />
            <span>
              <span className="office__label">{phone.label}</span>
              <a href={`tel:${phone.tel}`}>{phone.display}</a>
            </span>
          </p>
        ))}
      </address>

      {!office.verified && <span className="status-tag office__status">Details awaiting verification</span>}
    </article>
  );
}

export default function Contact() {
  usePageMeta({
    title: 'Contact Dying Seed Ministries',
    description:
      'Contact Dying Seed Ministries at its Head Office in Chennai or its offices in Bengaluru and Madurai, Tamil Nadu and Karnataka, India.',
  });

  const hasUnverified = offices.some((o) => !o.verified);

  return (
    <>
      <PageHero title="Get in Touch With Us" crumb="Contact Us" subtitle="We Would Love to Hear From You" />

      <section className="section" aria-label="Our offices">
        <div className="container">
          {hasUnverified && (
            <AnimatedSection>
              <p className="note contact__notice">
                <Info size={18} aria-hidden="true" />
                <span>
                  These office details come from the ministry’s supplied profile and are being re-confirmed. If you cannot
                  reach an office, please try another.
                </span>
              </p>
            </AnimatedSection>
          )}
          <RevealGroup className="offices">
            {offices.map((office) => (
              <RevealItem key={office.id}>
                <OfficeCard office={office} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section section--tint" aria-label="Contact form">
        <div className="container contact-layout">
          <AnimatedSection className="contact-layout__aside">
            <p className="eyebrow">Write to Us</p>
            <h2 className="contact-layout__title">How can we help?</h2>
            <p>Whether you have a question about the ministry, a prayer request, or would like to serve, we welcome your message.</p>
            <ul className="contact-layout__topics">
              <li>General enquiries</li>
              <li>Prayer requests</li>
              <li>Volunteering and service</li>
              <li>Ministry information</li>
              <li>Support enquiries</li>
            </ul>
          </AnimatedSection>
          <AnimatedSection className="contact-layout__form" delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
