import { Check, Target } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import AnimatedSection, { RevealGroup, RevealItem } from '../components/AnimatedSection.jsx';
import HistoryTimeline from '../components/HistoryTimeline.jsx';
import ScriptureSection from '../components/ScriptureSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { WheatOrnament } from '../components/Illustrations.jsx';
import { historyParagraphs, founderBio, timeline } from '../data/history.js';
import { ministryInfo, aspiration, vision, mission } from '../data/ministryInfo.js';
import { coreValues, mainObjectives } from '../data/ministries.js';
import usePageMeta from '../hooks/usePageMeta.js';
import '../styles/About.css';

const facts = [
  { label: 'Founder', value: ministryInfo.founder.name },
  { label: 'Born in', value: 'Pasumalai, Madurai, Tamil Nadu' },
  { label: 'Vision', value: '1962' },
  { label: 'Salvation', value: '1970' },
  { label: 'Established', value: '1982' },
  { label: 'Head Office', value: 'Chennai, Tamil Nadu' },
  { label: 'Other Offices', value: 'Bengaluru & Madurai' },
];

export default function About() {
  usePageMeta({
    title: 'Our History | Dying Seed Ministries',
    description:
      'The history, founder, vision, mission and core values of Dying Seed Ministries — a vision planted in 1962 and established as a missionary organization in 1982.',
  });

  const { founder } = ministryInfo;

  return (
    <>
      <PageHero
        title="About Dying Seed Ministries"
        crumb="About Us"
        subtitle="A Vision Planted in Faith, Growing Through Service"
      />

      {/* History */}
      <section id="history" className="section" aria-labelledby="history-title">
        <div className="container history">
          <div className="history__main">
            <SectionHeading id="history-title" eyebrow="Our History" title="How the Seed Was Sown" />
            <AnimatedSection className="prose history__prose">
              {historyParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </AnimatedSection>
          </div>
          <AnimatedSection as="aside" className="facts" aria-labelledby="facts-title" delay={0.1}>
            <h3 id="facts-title" className="facts__title">
              At a Glance
            </h3>
            <dl className="facts__list">
              {facts.map((f) => (
                <div key={f.label} className="facts__row">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="about-journey-title">
        <div className="container">
          <SectionHeading id="about-journey-title" eyebrow="Milestones" title="Our Journey Through the Years" align="center" />
          <HistoryTimeline items={timeline} />
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="section section--white" aria-labelledby="founder-title">
        <div className="container founder">
          <AnimatedSection className="founder__portrait">
            {founder.photo ? (
              <img src={founder.photo} alt={`Portrait of ${founder.name}`} loading="lazy" />
            ) : (
              <div className="founder__placeholder" role="img" aria-label={`Typographic emblem for ${founder.name}`}>
                <span className="founder__monogram" aria-hidden="true">
                  LD
                </span>
                <WheatOrnament className="founder__ornament" />
                <span className="founder__placeholder-name" aria-hidden="true">
                  Pasumalai, Madurai
                </span>
              </div>
            )}
          </AnimatedSection>
          <div className="founder__content">
            <SectionHeading id="founder-title" eyebrow="Our Founder" title="The Visionary Behind Dying Seed Ministries" />
            <AnimatedSection delay={0.1}>
              <p className="founder__name">{founder.name}</p>
              <p className="founder__designation">{founder.designation}</p>
              <div className="prose">
                {founderBio.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="section section--dark" aria-labelledby="vision-title">
        <div className="container vision">
          <div>
            <SectionHeading id="vision-title" eyebrow="Looking Ahead" title="Our Vision" light />
            <AnimatedSection as="blockquote" className="vision__statement" delay={0.1}>
              <p>“{vision}”</p>
            </AnimatedSection>
          </div>
          <AnimatedSection className="aspiration" delay={0.2}>
            <span className="aspiration__icon" aria-hidden="true">
              <Target size={26} strokeWidth={1.5} />
            </span>
            <p className="aspiration__eyebrow">Historical Aspiration</p>
            <p className="aspiration__value">
              {aspiration.value.toLocaleString('en-IN')}
              <span>{aspiration.label}</span>
            </p>
            <p className="aspiration__text">{aspiration.description}</p>
            <span className="status-tag">{aspiration.status}</span>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="section" aria-labelledby="mission-title">
        <div className="container mission">
          <div className="mission__statement">
            <SectionHeading id="mission-title" eyebrow="Our Purpose" title="Our Mission" />
            <AnimatedSection delay={0.1}>
              <p className="mission__text">{mission}</p>
            </AnimatedSection>
          </div>
          <AnimatedSection className="objectives" delay={0.15}>
            <h3 className="objectives__title">Key Objectives</h3>
            <ul className="objectives__list">
              {mainObjectives.map((o) => (
                <li key={o}>
                  <span className="objectives__check" aria-hidden="true">
                    <Check size={16} strokeWidth={2.4} />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="section section--tint" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading
            id="values-title"
            eyebrow="What Guides Us"
            title="Our Core Values"
            description="Six commitments that shape the life and service of the ministry."
            align="center"
          />
          <RevealGroup className="values">
            {coreValues.map(({ icon: Icon, title, text }) => (
              <RevealItem key={title} className="value">
                <span className="value__icon" aria-hidden="true">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <h3 className="value__title">{title}</h3>
                <p className="value__text">{text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ScriptureSection
        title="A Life That Bears Much Fruit"
        explanation="The name Dying Seed reflects the conviction that a life given wholly to Jesus Christ — like a grain of wheat that falls to the ground — produces a harvest far greater than itself."
      />

      <CallToAction
        eyebrow="Continue the Story"
        title="See how the ministry serves today."
        text="Discover the discipleship training, Gospel outreach, and missionary service at the heart of Dying Seed Ministries."
        actions={[
          { label: 'Explore Our Ministries', to: '/ministries', variant: 'gold' },
          { label: 'Get Involved', to: '/support', variant: 'outline-light' },
        ]}
      />
    </>
  );
}
