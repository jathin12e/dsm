import { Link } from 'react-router-dom';
import { ArrowRight, Info, Mail, Phone } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import AnimatedSection, { RevealGroup, RevealItem } from '../components/AnimatedSection.jsx';
import PrayerNeeds from '../components/PrayerNeeds.jsx';
import ShareButton from '../components/ShareButton.jsx';
import ScriptureSection from '../components/ScriptureSection.jsx';
import { supportWays, prayerNeeds, provisionHistory, givingConfig } from '../data/prayerNeeds.js';
import { offices } from '../data/contactInfo.js';
import usePageMeta from '../hooks/usePageMeta.js';
import '../styles/Support.css';

const formatINR = (n) => `₹${n.toLocaleString('en-IN')}`;

function SupportAction({ action }) {
  if (action.share) return <ShareButton label={action.label} />;
  if (action.to.startsWith('#')) {
    return (
      <a href={action.to} className="text-link">
        {action.label} <ArrowRight size={16} aria-hidden="true" />
      </a>
    );
  }
  return (
    <Link to={action.to} className="text-link">
      {action.label} <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}

export default function Support() {
  usePageMeta({
    title: 'Prayer & Support | Dying Seed Ministries',
    description:
      'Stand with Dying Seed Ministries in prayer and service. Learn about prayer needs, volunteering, and how to enquire about supporting missionary needs.',
  });

  const headOffice = offices.find((o) => o.isHeadOffice);
  const { historicalMonthlySupport: monthly } = provisionHistory;

  return (
    <>
      <PageHero title="Stand With Us in Prayer and Service" crumb="Support & Prayer" subtitle="Together in Faith, Together in Mission" />

      <section className="section" aria-labelledby="ways-title">
        <div className="container">
          <SectionHeading
            id="ways-title"
            eyebrow="Ways to Support"
            title="Four Ways to Stand With Us"
            description="Every prayer, every hour of service, and every word shared helps carry the Gospel further."
          />
          <RevealGroup className="ways">
            {supportWays.map(({ icon: Icon, title, text, action }, i) => (
              <RevealItem key={title} className="way">
                <span className="way__number" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="way__icon" aria-hidden="true">
                  <Icon size={28} strokeWidth={1.5} />
                </span>
                <div className="way__body">
                  <h3 className="way__title">{title}</h3>
                  <p className="way__text">{text}</p>
                  <SupportAction action={action} />
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="prayer-needs" className="section section--tint" aria-labelledby="needs-title">
        <div className="container needs-layout">
          <div className="needs-layout__aside">
            <SectionHeading
              id="needs-title"
              eyebrow="Prayer Needs"
              title="Please Pray With Us For"
              description="These needs come from the ministry’s historical account. We invite you to remember them in prayer."
            />
            <AnimatedSection delay={0.1}>
              <p className="note">
                <Info size={18} aria-hidden="true" />
                <span>
                  Amounts shown are historical stated targets pending confirmation — not current fundraising goals or
                  remaining balances.
                </span>
              </p>
            </AnimatedSection>
          </div>
          <PrayerNeeds needs={prayerNeeds} />
        </div>
      </section>

      <section className="section section--white" aria-labelledby="provision-title">
        <div className="container container--narrow provision">
          <SectionHeading id="provision-title" eyebrow="Faith & Provision" title="Our Journey of Faith and Provision" align="center" />
          <AnimatedSection className="provision__body" delay={0.1}>
            {provisionHistory.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {monthly.approvedForPublication && (
              <p className="provision__figures">
                Historically, monthly support for missionaries ranged from approximately {formatINR(monthly.min)} to{' '}
                {formatINR(monthly.max)}. <span className="status-tag">{monthly.note}</span>
              </p>
            )}
          </AnimatedSection>
        </div>
      </section>

      <section id="support-enquiry" className="section" aria-labelledby="enquiry-title">
        <div className="container">
          <AnimatedSection className="enquiry">
            <div className="enquiry__content">
              <p className="eyebrow">Support Enquiry</p>
              <h2 id="enquiry-title" className="enquiry__title">
                Would you like to support missionary needs?
              </h2>
              <p>
                We are glad you would like to stand with the ministry. Please get in touch and we will share how you can help
                with current needs.
              </p>
              {!givingConfig.onlineGivingEnabled && (
                <p className="enquiry__notice">
                  <Info size={18} aria-hidden="true" />
                  Online giving is not available on this website. Bank and payment details will only be published here once
                  they have been officially verified.
                </p>
              )}
            </div>
            <div className="enquiry__actions">
              <Link to="/contact?subject=support" className="btn btn--gold btn--lg">
                <Mail size={18} aria-hidden="true" /> Send a Support Enquiry
              </Link>
              {headOffice && (
                <a href={`tel:${headOffice.phones[0].tel}`} className="btn btn--outline-light btn--lg">
                  <Phone size={18} aria-hidden="true" /> Call Head Office
                </a>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ScriptureSection
        title="A Harvest Shared Together"
        explanation="Every prayer offered and every life given in service is part of the harvest that grows from a single seed. Thank you for standing with us."
      />
    </>
  );
}
