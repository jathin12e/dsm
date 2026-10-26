import { WheatOrnament } from './Illustrations.jsx';
import AnimatedSection from './AnimatedSection.jsx';
import { scripture } from '../data/ministryInfo.js';

export default function ScriptureSection({
  title = 'The Scripture Behind Our Name',
  explanation = 'The vision of Dying Seed Ministries is rooted in the biblical principle of a seed that gives itself to produce a greater harvest. This reflects the ministry’s calling to a life of sacrifice, wholehearted commitment, discipleship, and service to Jesus Christ.',
}) {
  return (
    <section className="scripture section" aria-labelledby="scripture-title">
      <div className="container container--narrow scripture__inner">
        <AnimatedSection>
          <p className="eyebrow eyebrow--center">{scripture.reference}</p>
          <figure className="scripture__figure">
            <blockquote className="scripture__quote">
              <p>“{scripture.text}”</p>
            </blockquote>
            <figcaption className="scripture__ref">— {scripture.reference}</figcaption>
          </figure>
          <WheatOrnament className="scripture__ornament" />
          <h2 id="scripture-title" className="scripture__title">
            {title}
          </h2>
          <p className="scripture__text">{explanation}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
