import {
  Anchor,
  BookOpen,
  BookOpenText,
  Church,
  Footprints,
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  Megaphone,
  Mountain,
  Scale,
  ScrollText,
  Share2,
  Sprout,
  Users,
  Wheat,
} from 'lucide-react';

/** Home — "Our Mission Is to Raise Faithful Disciples" */
export const missionPillars = [
  {
    icon: Sprout,
    title: 'Make Disciples',
    text: 'Encourage wholehearted commitment to Jesus Christ through the teaching and practice of God’s Word.',
  },
  {
    icon: GraduationCap,
    title: 'Equip Teachers',
    text: 'Train believers to proclaim the Gospel faithfully and become effective teachers and discipleship leaders.',
  },
  {
    icon: Footprints,
    title: 'Serve Communities',
    text: 'Carry the message of Jesus Christ into cities and villages through missionary outreach and dedicated service.',
  },
];

/** Home — key ministry activities. `anchor` links to the matching section on /ministries. */
export const highlights = [
  {
    icon: Users,
    title: 'Dynamic Discipleship Training Programmes',
    text: 'Training programmes held in different locations and churches to strengthen believers in wholehearted commitment to Christ.',
    anchor: 'discipleship',
  },
  {
    icon: Megaphone,
    title: 'Gospel Outreach',
    text: 'Proclaiming the Gospel of Jesus Christ in cities and villages through missionary outreach.',
    anchor: 'gospel-proclamation',
  },
  {
    icon: BookOpen,
    title: 'Bible Teaching',
    text: 'Teaching God’s Word so believers grow in understanding and live out what they learn.',
    anchor: 'church-community',
  },
  {
    icon: HeartHandshake,
    title: 'Missionary Service',
    text: 'Men and women from different backgrounds giving their lives to serve as missionaries.',
    anchor: 'missionary-service',
  },
  {
    icon: ScrollText,
    title: 'Christian Literature & Tract Distribution',
    text: 'Sharing the message of Christ through Christian literature and Gospel tracts.',
    anchor: 'literature',
  },
  {
    icon: GraduationCap,
    title: 'Training Gospel Teachers',
    text: 'Preparing teachers who communicate biblical truth faithfully and equip others.',
    anchor: 'teacher-training',
  },
];

/** /ministries — detailed ministry sections */
export const ministryDetails = [
  {
    id: 'discipleship',
    icon: Users,
    title: 'Dynamic Discipleship Training Programmes',
    summary:
      'The Dynamic Discipleship Training Programmes are at the heart of the ministry’s work, organised in different locations and churches.',
    body: 'These programmes are designed to strengthen believers in the teaching and practice of God’s Word and to encourage wholehearted commitment to Jesus Christ — a life that places Him above the pursuit of money, position, popularity, and possessions.',
    points: [
      'Organised in different locations and churches',
      'Rooted in the teaching and practice of Scripture',
      'Encourages wholehearted commitment to Christ',
    ],
  },
  {
    id: 'gospel-proclamation',
    icon: Megaphone,
    title: 'Gospel Proclamation',
    summary: 'Dying Seed Ministries is committed to proclaiming the Gospel of Jesus Christ in cities and villages.',
    body: 'Through missionary outreach and preaching, the ministry carries the message of Christ to people in many places. Its historical account describes thousands hearing the Gospel each year.',
    points: ['Outreach in cities and villages', 'Preaching the message of Jesus Christ', 'Carried out by dedicated missionaries'],
  },
  {
    id: 'teacher-training',
    icon: GraduationCap,
    title: 'Training Gospel Teachers',
    summary:
      'A long-held vision of the ministry is to prepare teachers who can communicate biblical truth and equip other believers.',
    body: 'The ministry seeks to train believers who will proclaim the Gospel faithfully and become effective teachers and discipleship leaders. It has expressed the aspiration of raising 1,000 Gospel trainers to serve in different parts of India and abroad.',
    points: [
      'Equipping believers to teach God’s Word',
      'Developing discipleship leaders',
      'Aspiration: 1,000 Gospel trainers',
    ],
  },
  {
    id: 'missionary-service',
    icon: HeartHandshake,
    title: 'Missionary Service',
    summary:
      'Men and women from different educational and social backgrounds have given themselves to missionary service.',
    body: 'The ministry itself began with Mr. and Mrs. Lloyd serving as full-time missionaries. Since then, missionaries have served in different regions of India, and women missionaries have contributed to outreach and ministry work in a number of Indian locations.',
    points: [
      'Began with Mr. and Mrs. Lloyd as full-time missionaries',
      'Missionaries from varied educational and social backgrounds',
      'Women’s missionary service in several locations',
    ],
  },
  {
    id: 'literature',
    icon: ScrollText,
    title: 'Christian Literature Outreach',
    summary: 'The ministry reaches people through Christian literature and the distribution of Gospel tracts.',
    body: 'Printed literature allows the message of Jesus Christ to be read, kept, and shared — reaching people alongside the ministry’s preaching and outreach.',
    points: ['Christian literature', 'Gospel tract distribution', 'Supports outreach and teaching'],
  },
  {
    id: 'church-community',
    icon: Church,
    title: 'Church and Community Ministry',
    summary:
      'Alongside its training programmes, the ministry is involved in preaching, biblical teaching, and other Christian service.',
    body: 'Working with churches and believers in the places where it serves, the ministry encourages people to use their talents, abilities, and resources for the work of the Gospel.',
    points: ['Preaching and Bible teaching', 'Working alongside churches', 'Encouraging believers to serve'],
  },
];

export const mainObjectives = [
  'Develop committed disciples of Jesus Christ.',
  'Train faithful teachers of the Gospel.',
  'Proclaim the Word of God.',
  'Encourage the use of individual talents and resources for Christian service.',
  'Support missionary work in cities and villages.',
  'Strengthen a culture of integrity and wholehearted commitment.',
];

export const coreValues = [
  { icon: Anchor, title: 'Faithfulness', text: 'Remain committed to Jesus Christ and His Word.' },
  { icon: Wheat, title: 'Sacrifice', text: 'Place the calling to serve God above worldly ambitions.' },
  { icon: Scale, title: 'Integrity', text: 'Practice honesty, sincerity, and accountability.' },
  { icon: BookOpenText, title: 'Discipleship', text: 'Help believers grow in spiritual understanding and commitment.' },
  { icon: HandHeart, title: 'Service', text: 'Use individual talents, abilities, and resources for ministry.' },
  { icon: Mountain, title: 'Perseverance', text: 'Continue faithfully through difficulties and challenging circumstances.' },
];

/** /ministries — "Lives Touched Through the Gospel" (historical outcomes; no invented numbers) */
export const impactAreas = [
  {
    icon: Megaphone,
    title: 'Gospel Outreach',
    text: 'The ministry’s historical account describes thousands hearing the Gospel each year.',
  },
  {
    icon: Users,
    title: 'Discipleship Development',
    text: 'Dynamic Discipleship Training Programmes have been central to encouraging spiritual commitment and training believers.',
  },
  {
    icon: Sprout,
    title: 'Leadership Development',
    text: 'The ministry describes individuals growing from new participants into Christian ministry leaders.',
  },
  {
    icon: HeartHandshake,
    title: 'Women’s Missionary Service',
    text: 'Women missionaries have contributed to outreach and ministry work in various Indian locations.',
  },
  {
    icon: Mountain,
    title: 'Faithful Service Through Challenges',
    text: 'The ministry’s history includes persevering through opposition, financial hardship, and challenging circumstances.',
  },
];

/** Home — "Be Part of the Mission" */
export const involvement = [
  {
    icon: Heart,
    title: 'Pray With Us',
    text: 'Remember our missionaries, families, ministry activities, and needs in prayer.',
    to: '/support#prayer-needs',
    linkLabel: 'See prayer needs',
  },
  {
    icon: HandHeart,
    title: 'Serve With Us',
    text: 'Explore opportunities to use your gifts, abilities, and time in Christian service.',
    to: '/contact?subject=volunteer',
    linkLabel: 'Enquire about serving',
  },
  {
    icon: HeartHandshake,
    title: 'Support the Mission',
    text: 'Learn about the practical and financial needs of missionaries and ministry activities.',
    to: '/support#support-enquiry',
    linkLabel: 'Learn about support',
  },
  {
    icon: Share2,
    title: 'Share Our Story',
    text: 'Help others learn about the work and calling of Dying Seed Ministries.',
    to: '/about',
    linkLabel: 'Read our story',
  },
];
