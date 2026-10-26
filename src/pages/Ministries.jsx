import { Check, Info } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import AnimatedSection, { RevealGroup, RevealItem } from '../components/AnimatedSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { WheatSprigBackdrop } from '../components/Illustrations.jsx';
import { ministryDetails, impactAreas } from '../data/ministries.js';
import usePageMeta from '../hooks/usePageMeta.js';
import '../styles/Ministries.css';

export default function Ministries() {
  usePageMeta({
    title: 'Our Ministries | Dying Seed Ministries',
    description:
      'Dynamic Discipleship Training Programmes, Gospel proclamation, training Gospel teachers, missionary service, Christian literature outreach, and church ministry.',
  });

  return (
    <>
      <PageHero title="Our Ministries" subtitle="Serving Christ Through Teaching, Training and Gospel Outreach">
        <nav className="ministry-jump" aria-label="Ministries on this page">
          <ul>
            {ministryDetails.map((m) => (
              <li key={m.id}>
                <a href={`#${m.id}`}>{m.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="ministry-list">
        {ministryDetails.map((m, i) => {
          const Icon = m.icon;
          return (
            <section
              key={m.id}
              id={m.id}
              className={`section ministry${i % 2 ? ' ministry--alt' : ''}`}
              aria-labelledby={`${m.id}-title`}
            >
              <div className={`container split${i % 2 ? ' split--reverse' : ''}`}>
                <AnimatedSection className="split__media">
                  <div className="ministry__visual" aria-hidden="true">
                    <WheatSprigBackdrop className="ministry__sprig" />
                    <span className="ministry__number">{String(i + 1).padStart(2, '0')}</span>
                    <span className="ministry__icon">
                      <Icon size={56} strokeWidth={1.2} />
                    </span>
                  </div>
                </AnimatedSection>
                <AnimatedSection className="split__content" delay={0.1}>
                  <p className="eyebrow">Ministry {String(i + 1).padStart(2, '0')}</p>
                  <h2 id={`${m.id}-title`} className="ministry__title">
                    {m.title}
                  </h2>
                  <p className="ministry__summary">{m.summary}</p>
                  <p className="ministry__body">{m.body}</p>
                  <ul className="ministry__points">
                    {m.points.map((p) => (
                      <li key={p}>
                        <Check size={18} strokeWidth={2.2} aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>
            </section>
          );
        })}
      </div>

      <section className="section section--white" aria-labelledby="activities-title">
        <div className="container container--narrow">
          <AnimatedSection className="activities">
            <span className="activities__value" aria-hidden="true">
              ~30
            </span>
            <div>
              <h2 id="activities-title" className="activities__title">
                Around 30 Types of Missionary Activity
              </h2>
              <p>
                The ministry’s historical account identifies around 30 different types of missionary activity. The ministries
                described above are those documented in detail; others will be added here as the ministry shares them.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="impact-title">
        <div className="container">
          <SectionHeading
            id="impact-title"
            eyebrow="Mission Impact"
            title="Lives Touched Through the Gospel"
            description="How the ministry’s historical account describes the fruit of its work."
            align="center"
          />
          <RevealGroup className="impact">
            {impactAreas.map(({ icon: Icon, title, text }) => (
              <RevealItem key={title} className="impact__item">
                <span className="impact__icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <h3 className="impact__title">{title}</h3>
                <p className="impact__text">{text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <p className="note impact__note">
            <Info size={18} aria-hidden="true" />
            <span>
              We share these outcomes as the ministry has described them. We do not publish conversion numbers or
              testimonies unless they are provided and approved by the ministry.
            </span>
          </p>
        </div>
      </section>

      <CallToAction
        eyebrow="Serve With Us"
        title="Join Us in Serving"
        text="Whether through prayer, service, or support, there is a place for you in the mission of proclaiming the Gospel."
        actions={[
          { label: 'Join Us in Serving', to: '/contact?subject=volunteer', variant: 'gold' },
          { label: 'Ways to Support', to: '/support', variant: 'outline-light' },
        ]}
      />
    </>
  );
}
