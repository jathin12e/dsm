/**
 * Office contact details supplied from the ministry's historical profile.
 *
 * IMPORTANT: verify every address and phone number before launch, then set
 * `verified: true`. Unverified offices show an "awaiting verification" label,
 * and the footer only displays details for verified offices.
 *
 * Do not add email addresses or social media accounts unless they are official.
 */

export const offices = [
  {
    id: 'chennai',
    name: 'Head Office',
    city: 'Chennai',
    isHeadOffice: true,
    address: ['2/32, Ananda Vinayagar Koil Street,', 'Ayanavaram, Chennai – 600023,', 'Tamil Nadu, India.'],
    contactPerson: null,
    phones: [{ label: 'Phone', display: '044-26747641', tel: '+914426747641' }],
    verified: false,
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru Office',
    city: 'Bengaluru',
    address: ['No. 213/2, III Cross,', 'Jayanthinagar, Horamavu,', 'Bengaluru – 560113, Karnataka, India.'],
    contactPerson: 'Mr. Lloyd D. Thomas',
    phones: [{ label: 'Phone', display: '09343368458', tel: '+919343368458' }],
    verified: false,
  },
  {
    id: 'madurai',
    name: 'Madurai Office',
    city: 'Madurai',
    address: ['No. 1, Old Vilachery Road,', 'Pasumalai, Madurai – 625004,', 'Tamil Nadu, India.'],
    contactPerson: 'Rev. Ben Manoharan',
    phones: [
      { label: 'Phone', display: '0452-2370870', tel: '+914522370870' },
      { label: 'Mobile', display: '09486726937', tel: '+919486726937' },
    ],
    verified: false,
  },
];

export const contactConfig = {
  /**
   * URL of a form-handling service (e.g. Formspree, a serverless function, or
   * the ministry's own API) that accepts a JSON POST. While `null`, the form
   * validates input but clearly tells visitors that nothing has been sent.
   */
  formEndpoint: null,
  email: null,
  socialLinks: [],
};

export const contactSubjects = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'prayer', label: 'Prayer Request' },
  { value: 'volunteer', label: 'Volunteer Enquiry' },
  { value: 'ministry', label: 'Ministry Information' },
  { value: 'support', label: 'Support Enquiry' },
];
