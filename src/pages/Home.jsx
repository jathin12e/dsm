import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero.jsx';
import ScriptureSection from '../components/ScriptureSection.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import AnimatedSection, { RevealGroup, RevealItem } from '../components/AnimatedSection.jsx';
import HistoryTimeline from '../components/HistoryTimeline.jsx';
import MissionStats from '../components/MissionStats.jsx';
import MinistryCard from '../components/MinistryCard.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { BibleIllustration, WheatOrnament } from '../components/Illustrations.jsx';
import { timeline, introParagraphs } from '../data/history.js';
import { missionPillars, highlights, involvement } from '../data/ministries.js';
import { historicalStats } from '../data/ministryInfo.js';
import { regions } from '../data/locations.js';
import usePageMeta from '../hooks/usePageMeta.js';
import '../styles/Home.css';

export default function Home() {
  usePageMeta({
    title: 'Dying Seed Ministries | Christian Mission & Discipleship',
    description:
      'Dying Seed Ministries is a Christian missionary organization established in 1982, proclaiming the Gospel of Jesus Christ, raising devoted disciples, and equipping believers to serve God wholeheartedly.',
  });

  return (
    <>
      <Hero />

      <ScriptureSection />

      {/* Introduction */}
      <section className="section section--white" aria-labelledby="intro-title">
        <div className="container split">
          <AnimatedSection className="split__media intro__media">
            <BibleIllustration />
          </AnimatedSection>
          <div className="split__content">
            <SectionHeading
              id="intro-title"
              eyebrow="Who We Are"
              title="Welcome to Dying Seed Ministries"
              subtitle="A Journey of Faith, Sacrifice & Discipleship"
            />
            <AnimatedSection delay={0.1} className="prose">
              {introParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <Link to="/about#history" className="text-link">
                Read Our History <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="section section--tint" aria-labelledby="journey-title">
        <div className="container">
          <SectionHeading
            id="journey-title"
            eyebrow="Our Story"
            title="Our Journey Through the Years"
            description="From a vision planted in 1962 to a missionary organization established in 1982."
            align="center"
          />
          <HistoryTimeline items={timeline} />
        </div>
      </section>

      {/* Mission */}
      <section className="section section--dark home-mission" aria-labelledby="mission-title">
        <div className="container">
          <div className="home-mission__intro">
            <SectionHeading id="mission-title" eyebrow="Our Mission" title="Our Mission Is to Raise Faithful Disciples" light />
            <AnimatedSection delay={0.1}>
              <p className="home-mission__lead">
                Our calling is to raise believers who wholeheartedly follow Jesus Christ, are not controlled by worldly
                ambition, and are willing to use their lives, gifts, resources, and abilities to advance the Gospel.
              </p>
            </AnimatedSection>
          </div>
          <RevealGroup className="pillars">
            {missionPillars.map(({ icon: Icon, title, text }, i) => (
              <RevealItem key={title} className="pillar">
                <span className="pillar__number" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="pillar__icon" aria-hidden="true">
                  <Icon size={28} strokeWidth={1.5} />
                </span>
                <h3 className="pillar__title">{title}</h3>
                <p className="pillar__text">{text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Ministry highlights — editorial list */}
      <section className="section" aria-labelledby="highlights-title">
        <div className="container highlights">
          <div className="highlights__aside">
            <SectionHeading
              id="highlights-title"
              eyebrow="What We Do"
              title="Serving Through Faith and Action"
              description="The ministry’s historical account describes involvement in around 30 types of ministry. These are some of the activities at the heart of its work."
            />
            <AnimatedSection delay={0.1}>
              <Link to="/ministries" className="btn btn--primary">
                Explore Our Ministries <ArrowRight className="btn__arrow" size={18} aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>
          <RevealGroup as="ul" className="highlights__list">
            {highlights.map(({ icon: Icon, title, text, anchor }) => (
              <RevealItem as="li" key={title}>
                <Link to={`/ministries#${anchor}`} className="highlight">
                  <span className="highlight__icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <span className="highlight__body">
                    <span className="highlight__title">{title}</span>
                    <span className="highlight__text">{text}</span>
                  </span>
                  <ArrowRight className="highlight__arrow" size={20} aria-hidden="true" />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Reach */}
      <section className="section section--tint reach" aria-labelledby="reach-title">
        <div className="container">
          <SectionHeading
            id="reach-title"
            eyebrow="Ministry Reach"
            title="Taking the Gospel Across India"
            description="Through its missionaries and associates, the ministry has historically reported serving in several Indian states — from Tamil Nadu and Karnataka to Gujarat, Kashmir, Manipur, and West Bengal."
            align="center"
          />
          <MissionStats {...historicalStats} />
          <AnimatedSection className="reach__regions">
            <WheatOrnament className="reach__ornament" />
            <ul className="chip-list" aria-label="Historically reported states and regions">
              {regions.flatMap((r) =>
                r.id === 'other' ? r.places.map((p) => <li key={p.name}>{p.name}</li>) : [<li key={r.id}>{r.name}</li>]
              )}
            </ul>
            <Link to="/locations" className="btn btn--outline">
              See Where We Serve <ArrowRight className="btn__arrow" size={18} aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Get involved */}
      <section className="section involve" aria-labelledby="involve-title">
        <div className="container">
          <div className="involve__header">
            <SectionHeading
              id="involve-title"
              eyebrow="Get Involved"
              title="Be Part of the Mission"
              description="There are many ways to stand alongside Dying Seed Ministries in its calling to proclaim the Gospel and equip faithful disciples."
            />
            <AnimatedSection delay={0.1}>
              <Link to="/support" className="btn btn--gold btn--lg">
                Get Involved <ArrowRight className="btn__arrow" size={18} aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>
          <RevealGroup className="involve__grid">
            {involvement.map((item) => (
              <RevealItem key={item.title}>
                <MinistryCard {...item} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CallToAction
        eyebrow="We would love to hear from you"
        title="Pray with us, ask a question, or share a prayer request."
        text="Our offices in Chennai, Bengaluru, and Madurai welcome your enquiries."
        actions={[
          { label: 'Contact Us', to: '/contact', variant: 'gold' },
          { label: 'Pray With Us', to: '/support#prayer-needs', variant: 'outline-light' },
        ]}
      />
    </>
  );
}
