/**
 * Official Dying Seed Ministries logo (supplied by the ministry).
 * Source artwork is processed into /public/images/logo-*.webp with a transparent
 * background; `light` places it on an ivory tile for dark backgrounds.
 */
const SRC_SET = '/images/logo-160.webp 160w, /images/logo-320.webp 320w, /images/logo-640.webp 640w';

export default function Logo({ light = false, showTagline = true, sizes = '(min-width: 1200px) 82px, 72px' }) {
  return (
    <span className={`brand${light ? ' brand--light' : ''}`}>
      <img
        className="brand__logo"
        src="/images/logo-160.webp"
        srcSet={SRC_SET}
        sizes={sizes}
        width="160"
        height="126"
        alt="Dying Seed Ministries logo"
        decoding="async"
      />
      <span className="brand__text">
        <span className="brand__name">Dying Seed Ministries</span>
        {showTagline && <span className="brand__tag">Since 1982 · John 12:24</span>}
      </span>
    </span>
  );
}
