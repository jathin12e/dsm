import { useState } from 'react';
import { Info, MapPin, RotateCcw } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import AnimatedSection, { RevealGroup, RevealItem } from '../components/AnimatedSection.jsx';
import MinistryMap from '../components/MinistryMap.jsx';
import LocationCard from '../components/LocationCard.jsx';
import CallToAction from '../components/CallToAction.jsx';
import { regions, additionalMentions, locationNotice } from '../data/locations.js';
import usePageMeta from '../hooks/usePageMeta.js';
import '../styles/Locations.css';

export default function Locations() {
  usePageMeta({
    title: 'Where We Serve | Dying Seed Ministries',
    description:
      'Historical ministry locations of Dying Seed Ministries across India, including Tamil Nadu, Karnataka, Andhra Pradesh, Gujarat, Kashmir, Manipur and West Bengal.',
  });

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [hoveredPlace, setHoveredPlace] = useState(null);
  const selectedName = regions.find((r) => r.id === selectedRegion)?.name;

  return (
    <>
      <PageHero title="Where We Serve" subtitle="Carrying the Message of Hope Across India" />

      <section className="section" aria-labelledby="directory-title">
        <div className="container">
          <AnimatedSection>
            <p className="note locations__notice">
              <Info size={18} aria-hidden="true" />
              <span>{locationNotice}</span>
            </p>
          </AnimatedSection>

          <div className="locations">
            <AnimatedSection className="locations__map">
              <MinistryMap
                regions={regions}
                extraPlaces={[additionalMentions.outreach.place]}
                selectedRegion={selectedRegion}
                hoveredPlace={hoveredPlace}
              />
            </AnimatedSection>

            <div className="locations__directory">
              <div className="locations__directory-head">
                <h2 id="directory-title" className="locations__title">
                  Ministry Location Directory
                </h2>
                <p className="locations__hint" aria-live="polite">
                  {selectedName ? (
                    <>
                      Showing <strong>{selectedName}</strong> on the map.{' '}
                      <button type="button" className="text-link share-button" onClick={() => setSelectedRegion(null)}>
                        Show all <RotateCcw size={14} aria-hidden="true" />
                      </button>
                    </>
                  ) : (
                    'Select a state or region to highlight it on the map.'
                  )}
                </p>
              </div>
              <RevealGroup className="locations__cards">
                {regions.map((region) => (
                  <RevealItem key={region.id}>
                    <LocationCard
                      region={region}
                      selected={selectedRegion === region.id}
                      onSelect={setSelectedRegion}
                      onHoverPlace={setHoveredPlace}
                    />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="mentions-title">
        <div className="container">
          <SectionHeading
            id="mentions-title"
            eyebrow="From the Historical Account"
            title="Also Mentioned in Our History"
            align="center"
          />
          <div className="mentions">
            <AnimatedSection className="mention">
              <h3 className="mention__title">{additionalMentions.outreach.title}</h3>
              <p>{additionalMentions.outreach.text}</p>
            </AnimatedSection>
            <AnimatedSection className="mention" delay={0.1}>
              <h3 className="mention__title">{additionalMentions.womensWork.title}</h3>
              <p>{additionalMentions.womensWork.text}</p>
              <ul className="chip-list chip-list--left">
                {additionalMentions.womensWork.places.map((p) => (
                  <li key={p}>
                    <MapPin size={14} aria-hidden="true" /> {p}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="Pray for the Work"
        title="Remember these places in prayer."
        text="Pray for the missionaries, believers, and communities wherever the Gospel is being shared."
        actions={[
          { label: 'Pray With Us', to: '/support#prayer-needs', variant: 'gold' },
          { label: 'Contact Us', to: '/contact', variant: 'outline-light' },
        ]}
      />
    </>
  );
}
