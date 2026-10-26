import { MapPin } from 'lucide-react';

/** A state/region in the location directory. Acts as a filter toggle for the map. */
export default function LocationCard({ region, selected, onSelect, onHoverPlace }) {
  const activeCount = region.places.filter((p) => p.status === 'active').length;

  return (
    <article className={`location-card${selected ? ' is-selected' : ''}`}>
      <button
        type="button"
        className="location-card__header"
        aria-pressed={selected}
        onClick={() => onSelect(selected ? null : region.id)}
      >
        <span>
          <span className="location-card__kind">{region.kind}</span>
          <h3 className="location-card__name">{region.name}</h3>
        </span>
        <span className="location-card__count">
          {region.places.length} {region.places.length === 1 ? 'place' : 'places'}
          <span className="visually-hidden">{selected ? ' — shown on map' : ' — show on map'}</span>
        </span>
      </button>
      <ul className="location-card__places">
        {region.places.map((place) => (
          <li
            key={place.name}
            onMouseEnter={() => onHoverPlace?.(place.name)}
            onMouseLeave={() => onHoverPlace?.(null)}
          >
            <MapPin size={16} aria-hidden="true" />
            <span>
              {place.name}
              {place.aka && <span className="location-card__aka"> ({place.aka})</span>}
            </span>
            {place.status === 'active' && <span className="status-tag status-tag--sage">Active</span>}
          </li>
        ))}
      </ul>
      <p className="location-card__status">
        {activeCount > 0 ? `${activeCount} verified active` : 'Historical ministry location'}
      </p>
    </article>
  );
}
