/**
 * Hand-built SVG illustrations. These are clearly illustrative artwork —
 * not photographs of ministry events, people or places.
 */

const GOLD = '#C79A50';
const GOLD_STEM = '#B08442';
const SAGE = '#789681';
const FOREST = '#183D32';

/** A single ear of wheat, drawn upward from its base at (x, y). */
export function WheatEar({ x, y, h = 320, rotate = 0, color = GOLD, stem = GOLD_STEM, opacity = 1, leaf = true }) {
  const grains = 8;
  const top = -h;
  const gap = (h * 0.36) / grains;
  const items = [];
  const awns = [];

  for (let i = 0; i < grains; i++) {
    const gy = top + 16 + i * gap;
    const ly = gy + gap / 2;
    items.push(
      <ellipse key={`l${i}`} cx={-4.6} cy={ly} rx={4} ry={9} transform={`rotate(-24 -4.6 ${ly})`} />,
      <ellipse key={`r${i}`} cx={4.6} cy={gy} rx={4} ry={9} transform={`rotate(24 4.6 ${gy})`} />
    );
    awns.push(
      <line key={`al${i}`} x1={-7} y1={ly - 7} x2={-17} y2={ly - 30} />,
      <line key={`ar${i}`} x1={7} y1={gy - 7} x2={17} y2={gy - 30} />
    );
  }

  const ly = -h * 0.34;
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`} opacity={opacity}>
      <path d={`M0 0 Q ${h * 0.03} ${-h * 0.5} 0 ${top + 16}`} stroke={stem} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {leaf && (
        <path
          d={`M0 ${ly} C 10 ${ly - 18} 26 ${ly - 38} 38 ${ly - 74} C 22 ${ly - 52} 10 ${ly - 36} 0 ${ly - 20} Z`}
          fill={stem}
          opacity="0.55"
        />
      )}
      <g stroke={color} strokeWidth="1" opacity="0.55" strokeLinecap="round">
        {awns}
        <line x1={0} y1={top + 2} x2={0} y2={top - 26} />
      </g>
      <g fill={color}>
        {items}
        <ellipse cx={0} cy={top + 6} rx={3.8} ry={9} />
      </g>
    </g>
  );
}

/** Home hero artwork: sunlit arch, wheat field and a seed sprouting in the soil. */
export function HeroArt() {
  const back = [
    { x: 70, h: 360, r: -8 },
    { x: 118, h: 410, r: -4 },
    { x: 402, h: 400, r: 5 },
    { x: 452, h: 350, r: 9 },
  ];
  const front = [
    { x: 42, h: 300, r: -12 },
    { x: 96, h: 340, r: -6 },
    { x: 150, h: 300, r: -2 },
    { x: 372, h: 310, r: 3 },
    { x: 428, h: 345, r: 7 },
    { x: 480, h: 290, r: 12 },
  ];

  return (
    <svg className="hero-art" viewBox="0 0 520 600" role="img" aria-label="Illustration of a wheat field in sunlight, with a seed sprouting in the soil">
      <defs>
        <linearGradient id="ha-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F4E6C8" />
          <stop offset="0.65" stopColor="#FAF6EC" />
          <stop offset="1" stopColor="#F2EDE2" />
        </linearGradient>
        <radialGradient id="ha-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={GOLD} stopOpacity="0.55" />
          <stop offset="0.6" stopColor={GOLD} stopOpacity="0.14" />
          <stop offset="1" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
        <clipPath id="ha-arch">
          <path d="M0 600V260A260 260 0 0 1 520 260V600Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#ha-arch)">
        <rect width="520" height="600" fill="url(#ha-sky)" />
        <circle cx="260" cy="250" r="190" fill="url(#ha-sun)" />
        <g fill="none" stroke={GOLD} strokeOpacity="0.28">
          <circle cx="260" cy="250" r="70" />
          <circle cx="260" cy="250" r="110" strokeDasharray="2 7" />
          <circle cx="260" cy="250" r="150" strokeOpacity="0.16" />
        </g>
        <path d="M0 450 C 90 418 170 432 260 440 C 350 448 430 420 520 436 V600 H0Z" fill={SAGE} opacity="0.18" />

        {back.map((s) => (
          <WheatEar key={`b${s.x}`} x={s.x} y={612} h={s.h} rotate={s.r} color="#D8B97F" stem="#C6A465" opacity={0.75} />
        ))}

        <path d="M0 528 C 120 512 200 520 260 522 C 330 524 420 510 520 520 V600 H0Z" fill="#E6D9BE" />
        <path d="M0 548 C 140 536 380 540 520 544 V600 H0Z" fill="#DCCBA8" />

        {front.map((s) => (
          <WheatEar key={`f${s.x}`} x={s.x} y={606} h={s.h} rotate={s.r} />
        ))}

        {/* The seed in the ground, with roots and a new sprout */}
        <g>
          <g stroke="#9C7A45" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.8">
            <path d="M258 568 C 252 578 246 584 238 590" />
            <path d="M262 569 C 266 580 274 586 282 592" />
            <path d="M260 570 C 260 580 259 588 260 598" />
          </g>
          <ellipse cx="260" cy="563" rx="15" ry="9.5" fill="#8A6526" transform="rotate(-14 260 563)" />
          <path d="M260 556 C 259 534 261 512 262 486" stroke={FOREST} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M262 506 C 240 504 222 490 214 470 C 236 472 254 484 262 506Z" fill={SAGE} />
          <path d="M262 492 C 282 486 298 468 302 446 C 282 452 266 468 262 492Z" fill={FOREST} />
        </g>
      </g>

      <path d="M8 600V260A252 252 0 0 1 512 260V600" fill="none" stroke={GOLD} strokeOpacity="0.45" />
    </svg>
  );
}

/** An open Bible with soft light rays. */
export function BibleIllustration() {
  const lines = [176, 194, 212, 230, 248, 266, 284, 302];
  return (
    <svg className="bible-art" viewBox="0 0 520 420" role="img" aria-label="Illustration of an open Bible">
      <g stroke={GOLD} strokeOpacity="0.35" strokeLinecap="round">
        {[-60, -40, -20, 0, 20, 40, 60].map((a) => (
          <line key={a} x1="260" y1="140" x2="260" y2="20" strokeWidth={a === 0 ? 2 : 1.2} transform={`rotate(${a} 260 150)`} />
        ))}
      </g>
      <circle cx="260" cy="150" r="70" fill={GOLD} opacity="0.1" />

      <path d="M30 162 Q150 130 260 172 Q370 130 490 162 L490 366 Q370 336 260 378 Q150 336 30 366 Z" fill={FOREST} />
      <path d="M44 152 Q150 122 257 160 L257 360 Q150 324 44 352 Z" fill="#EFE6D2" />
      <path d="M263 160 Q370 122 476 152 L476 352 Q370 324 263 360 Z" fill="#EFE6D2" />
      <path d="M52 142 Q150 112 257 152 L257 352 Q150 316 52 342 Z" fill="#FFFFFF" stroke="#E4DED1" />
      <path d="M263 152 Q370 112 468 142 L468 342 Q370 316 263 352 Z" fill="#FFFFFF" stroke="#E4DED1" />
      <path d="M257 152 L257 352 M263 152 L263 352" stroke="#E4DED1" />

      <g stroke="#D9D0BE" strokeWidth="3" strokeLinecap="round" fill="none">
        {lines.map((y, i) => (
          <path key={`l${y}`} d={`M82 ${y} Q 160 ${y - 18} ${i === lines.length - 1 ? 180 : 232} ${y + (i === lines.length - 1 ? -6 : 4)}`} />
        ))}
        {lines.map((y, i) => (
          <path key={`r${y}`} d={`M${i === 3 ? 330 : 288} ${y + 4} Q 360 ${y - 18} 438 ${y}`} />
        ))}
      </g>
      <path d="M82 154 Q 130 140 170 146" stroke={GOLD} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M288 146 Q 330 138 372 144" stroke={GOLD} strokeWidth="4" strokeLinecap="round" fill="none" />

      <path d="M253 348 L253 412 L261 401 L269 412 L269 348 Z" fill={GOLD} />
    </svg>
  );
}

/** Decorative divider: line · wheat · line */
export function WheatOrnament({ className = '' }) {
  return (
    <svg className={`wheat-ornament ${className}`} viewBox="0 0 160 28" aria-hidden="true" focusable="false">
      <line x1="0" y1="14" x2="58" y2="14" stroke="currentColor" strokeOpacity="0.5" />
      <line x1="102" y1="14" x2="160" y2="14" stroke="currentColor" strokeOpacity="0.5" />
      <g transform="translate(80 14) rotate(90)">
        <g fill="currentColor">
          <ellipse cx="0" cy="-15" rx="2.2" ry="4.6" />
          <ellipse cx="-3" cy="-8" rx="2.2" ry="4.6" transform="rotate(-28 -3 -8)" />
          <ellipse cx="3" cy="-8" rx="2.2" ry="4.6" transform="rotate(28 3 -8)" />
          <ellipse cx="-3" cy="-1" rx="2.2" ry="4.6" transform="rotate(-28 -3 -1)" />
          <ellipse cx="3" cy="-1" rx="2.2" ry="4.6" transform="rotate(28 3 -1)" />
        </g>
        <path d="M0 3 V18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Large faint wheat sprig for page and section backgrounds. */
export function WheatSprigBackdrop({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 460" aria-hidden="true" focusable="false">
      <WheatEar x={100} y={460} h={430} rotate={8} color="currentColor" stem="currentColor" />
      <WheatEar x={60} y={460} h={330} rotate={-10} color="currentColor" stem="currentColor" leaf={false} />
    </svg>
  );
}
