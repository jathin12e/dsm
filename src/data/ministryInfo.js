/**
 * Core ministry identity.
 *
 * Content source: the ministry profile supplied by Dying Seed Ministries.
 * Fields marked `verified: false` are historical and must be confirmed
 * by the ministry before the website is published.
 */

export const ESTABLISHED_YEAR = 1982;

export const yearsSinceEstablished = () => new Date().getFullYear() - ESTABLISHED_YEAR;

export const ministryInfo = {
  name: 'Dying Seed Ministries',
  tagline: 'A Seed of Faith. A Harvest of Hope.',
  message: 'A Seed of Faith. A Harvest of Hope. Serving Christ Through Discipleship and Mission.',
  summary:
    'Dying Seed Ministries is a Christian missionary organization established in 1982 with a commitment to proclaiming the Gospel of Jesus Christ, raising devoted disciples, and equipping believers to serve God wholeheartedly.',
  founder: {
    name: 'Brother Lloyd Devairakkam',
    designation: 'Founder, Dying Seed Ministries',
    birthplace: 'Pasumalai, Madurai, Tamil Nadu, India',
    // Add an authentic, family-approved photograph path here (e.g. '/images/founder.webp').
    // Until then the site shows a typographic placeholder — never a generated portrait.
    photo: null,
  },
  milestones: {
    vision: 1962,
    salvation: 1970,
    established: ESTABLISHED_YEAR,
  },
  headOffice: 'Chennai, Tamil Nadu, India',
  otherOffices: ['Bengaluru, Karnataka', 'Madurai, Tamil Nadu'],
};

export const scripture = {
  reference: 'John 12:24',
  text: 'Unless a grain of wheat falls to the ground and dies, it remains only a single seed. But if it dies, it produces many seeds.',
};

/** Official logo supplied by the ministry; web versions live in /public/images/logo-*.webp. */
export const logo = {
  official: true,
};

/**
 * Optional photography. Leave as `null` to use the built-in illustrations.
 * Only use authentic ministry photographs or properly licensed images
 * that are clearly illustrative (never presented as actual ministry events).
 */
export const media = {
  heroImage: null, // { src: '/images/hero.webp', alt: '...' }
};

/**
 * Figures from the ministry's historical account.
 * Keep `verified: false` until current numbers are confirmed;
 * the UI labels them as historically reported while this is false.
 */
export const historicalStats = {
  verified: false,
  note: 'These figures are drawn from the ministry’s historical account and are shown as historically reported. Current figures will be published once verified.',
  items: [
    { value: 35, label: 'Missionaries' },
    { value: 8, label: 'Associates' },
    { value: 7, label: 'Indian States' },
    { value: 30, prefix: '~', label: 'Types of Ministry', detail: 'Approximately' },
  ],
};

export const aspiration = {
  value: 1000,
  label: 'Gospel Trainers',
  description:
    'The ministry has expressed a desire to raise 1,000 Gospel trainers to serve in different parts of India and abroad.',
  status: 'A ministry aspiration — not a reported result',
};

export const vision =
  'To raise a generation of faithful disciples and Gospel teachers who wholeheartedly serve Jesus Christ, faithfully proclaim God’s Word, and use their God-given abilities to advance His mission.';

export const mission =
  'To equip and strengthen believers through Dynamic Discipleship Training Programmes, biblical teaching, Gospel outreach, and missionary service, encouraging lives marked by faithfulness, sacrifice, and complete dedication to Jesus Christ.';

/** Add legal pages here once their content exists, e.g. { label: 'Privacy Policy', to: '/privacy' }. */
export const legalLinks = [];
