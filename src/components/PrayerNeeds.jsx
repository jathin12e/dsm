import { RevealGroup, RevealItem } from './AnimatedSection.jsx';

export default function PrayerNeeds({ needs }) {
  return (
    <RevealGroup as="ol" className="needs">
      {needs.map(({ icon: Icon, title, text, target }, i) => (
        <RevealItem as="li" key={title} className={`needs__item${target ? ' needs__item--target' : ''}`}>
          <span className="needs__number" aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="needs__icon" aria-hidden="true">
            <Icon size={24} strokeWidth={1.6} />
          </span>
          <div className="needs__body">
            <h3 className="needs__title">{title}</h3>
            <p className="needs__text">{text}</p>
            {target && (
              <p className="needs__target">
                <span className="needs__amount">{target.amount}</span>
                <span className="status-tag">{target.label}</span>
              </p>
            )}
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
