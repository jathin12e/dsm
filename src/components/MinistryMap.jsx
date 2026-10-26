/**
 * Schematic map: places are plotted by latitude/longitude on a light graticule.
 * State borders are intentionally not drawn, to avoid an inaccurate outline.
 */

const SCALE = 18;
const PAD = 20;
const LON_MIN = 67;
const LAT_MAX = 37.5;
const WIDTH = 600;
const HEIGHT = 610;

const project = (lat, lon) => ({
  x: (lon - LON_MIN) * SCALE + PAD,
  y: (LAT_MAX - lat) * SCALE + PAD,
});

const LATS = [10, 15, 20, 25, 30, 35];
const LONS = [70, 75, 80, 85, 90, 95];

export default function MinistryMap({ regions, extraPlaces = [], selectedRegion, hoveredPlace }) {
  return (
    <figure className="map">
      <svg
        className="map__svg"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-labelledby="map-title map-desc"
      >
        <title id="map-title">Schematic map of historical ministry locations in India</title>
        <desc id="map-desc">
          Places plotted by latitude and longitude. A full text list of every location appears alongside the map.
        </desc>

        <defs>
          <pattern id="map-dots" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#183D32" opacity="0.07" />
          </pattern>
        </defs>
        <rect width={WIDTH} height={HEIGHT} fill="url(#map-dots)" />

        <g className="map__grid">
          {LATS.map((lat) => {
            const { y } = project(lat, LON_MIN);
            return (
              <g key={`lat${lat}`}>
                <line x1={PAD} x2={WIDTH - PAD} y1={y} y2={y} />
                <text x={WIDTH - PAD} y={y - 5} textAnchor="end">
                  {lat}°N
                </text>
              </g>
            );
          })}
          {LONS.map((lon) => {
            const { x } = project(LAT_MAX, lon);
            return (
              <g key={`lon${lon}`}>
                <line y1={PAD} y2={HEIGHT - PAD} x1={x} x2={x} />
                <text x={x + 4} y={HEIGHT - PAD - 4}>
                  {lon}°E
                </text>
              </g>
            );
          })}
        </g>

        {extraPlaces.map((place) => {
          const { x, y } = project(place.lat, place.lon);
          return (
            <g key={place.name} className="map__place map__place--mention" opacity={selectedRegion ? 0.35 : 1}>
              <circle cx={x} cy={y} r="14" className="map__region-ring" />
              <text x={x + place.label.dx} y={y + place.label.dy} textAnchor={place.label.anchor} className="map__label">
                {place.name}
              </text>
            </g>
          );
        })}

        {regions.map((region) => {
          const dimmed = selectedRegion && selectedRegion !== region.id;
          return (
            <g key={region.id} className={`map__group${dimmed ? ' is-dimmed' : ''}`}>
              {region.places.map((place) => {
                const { x, y } = project(place.lat, place.lon);
                const active = hoveredPlace === place.name;
                return (
                  <g key={place.name} className={`map__place${active ? ' is-hovered' : ''}`}>
                    <title>{`${place.name}, ${region.name === 'Other Reported Regions' ? 'reported region' : region.name}`}</title>
                    {place.region ? (
                      <circle cx={x} cy={y} r="16" className="map__region-ring map__region-ring--reported" />
                    ) : (
                      <>
                        <circle cx={x} cy={y} r="9" className="map__halo" />
                        <circle cx={x} cy={y} r="4.5" className="map__dot" />
                      </>
                    )}
                    <text x={x + place.label.dx} y={y + place.label.dy} textAnchor={place.label.anchor} className="map__label">
                      {place.name}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
      <figcaption className="map__legend">
        <span>
          <span className="map__key map__key--dot" aria-hidden="true" /> City or town
        </span>
        <span>
          <span className="map__key map__key--ring" aria-hidden="true" /> Reported region
        </span>
        <span>
          <span className="map__key map__key--mention" aria-hidden="true" /> Also mentioned
        </span>
        <span className="map__caption">Schematic — plotted by latitude and longitude; borders not shown.</span>
      </figcaption>
    </figure>
  );
}
