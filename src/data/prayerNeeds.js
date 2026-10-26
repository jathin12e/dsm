import { Bike, Building2, Hammer, Heart, HandHeart, HeartHandshake, Laptop, PiggyBank, Share2 } from 'lucide-react';

export const supportWays = [
  {
    icon: Heart,
    title: 'Pray for the Mission',
    text: 'Remember our missionaries, their families, the discipleship programmes, and the needs listed below in your prayers.',
    action: { label: 'View prayer needs', to: '#prayer-needs' },
  },
  {
    icon: HandHeart,
    title: 'Volunteer and Serve',
    text: 'If you would like to use your gifts, abilities, and time in Christian service, we would be glad to hear from you.',
    action: { label: 'Send a volunteer enquiry', to: '/contact?subject=volunteer' },
  },
  {
    icon: HeartHandshake,
    title: 'Support Missionary Needs',
    text: 'Learn about the practical and financial needs of the missionaries and the ministry’s activities.',
    action: { label: 'Make a support enquiry', to: '#support-enquiry' },
  },
  {
    icon: Share2,
    title: 'Share the Ministry’s Vision',
    text: 'Tell others about the calling of Dying Seed Ministries and invite them to pray with us.',
    action: { label: 'Share this page', share: true },
  },
];

/**
 * Needs from the ministry's historical account.
 * `target` values are historical stated targets pending confirmation —
 * not current fundraising goals or remaining balances.
 */
export const prayerNeeds = [
  {
    icon: Bike,
    title: 'Transport for Missionaries',
    text: 'Motorcycles and transportation support for missionaries.',
  },
  {
    icon: Building2,
    title: 'Office Buildings',
    text: 'Support toward the ministry’s need for its own office facilities.',
  },
  {
    icon: Hammer,
    title: 'Madurai Building Renovation',
    text: 'Renovation needs for the Madurai building.',
  },
  {
    icon: Laptop,
    title: 'Computers & Equipment',
    text: 'Computers, printers, and laptops for ministry activities.',
  },
  {
    icon: PiggyBank,
    title: 'Missionary Support Reserve',
    text: 'A staff support reserve fund to sustain missionaries in their service.',
    target: {
      amount: '₹40 lakh',
      label: 'Historical stated target — pending confirmation',
    },
  },
];

/**
 * "Our Journey of Faith and Provision".
 * Historical monthly support amounts are preserved here but hidden on the site
 * until the ministry approves them for publication. They are historical figures,
 * never current salaries or guaranteed payments.
 */
export const provisionHistory = {
  paragraphs: [
    'From its beginning, the ministry’s missionaries have served with limited financial resources.',
    'The ministry’s historical account describes missionaries facing irregular support, yet continuing their work faithfully despite hardship — trusting God for provision as they carried the Gospel to cities and villages.',
  ],
  historicalMonthlySupport: {
    approvedForPublication: false,
    min: 5000,
    max: 12000,
    currency: 'INR',
    note: 'Historical monthly support amounts recorded in the ministry’s account. These are not current salaries or guaranteed payments.',
  },
};

/**
 * Online giving stays disabled until official bank details, authorised payment
 * information, and legal/tax information are supplied and verified.
 */
export const givingConfig = {
  onlineGivingEnabled: false,
  bankDetails: null,
  legalInformation: null,
};
