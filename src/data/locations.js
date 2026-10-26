/**
 * Places drawn from the ministry's historical account.
 *
 * Every place carries `status: 'historical'`. When the ministry confirms a place
 * as a currently active location, change its status to 'active' — the map and
 * directory will label it accordingly. Do not add addresses or contact persons
 * here unless supplied and verified by the ministry.
 *
 * `lat`/`lon` place each point on the schematic map. `label` positions its text
 * (`dx`, `dy` offsets in map units, `anchor` = SVG text-anchor).
 */

export const regions = [
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    kind: 'State',
    places: [
      { name: 'Madurai', lat: 9.93, lon: 78.12, status: 'historical', label: { dx: 9, dy: 4, anchor: 'start' } },
      { name: 'Hosur', lat: 12.74, lon: 77.83, status: 'historical', label: { dx: 8, dy: 13, anchor: 'start' } },
      { name: 'Chennai', lat: 13.08, lon: 80.27, status: 'historical', label: { dx: 9, dy: 4, anchor: 'start' } },
    ],
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    kind: 'State',
    places: [
      { name: 'Bengaluru', lat: 12.97, lon: 77.59, status: 'historical', label: { dx: -9, dy: 6, anchor: 'end' } },
      { name: 'Bidar', lat: 17.91, lon: 77.52, status: 'historical', label: { dx: 9, dy: 4, anchor: 'start' } },
      {
        name: 'Shivamogga',
        aka: 'Shimoga',
        lat: 13.93,
        lon: 75.57,
        status: 'historical',
        label: { dx: -9, dy: 4, anchor: 'end' },
      },
      {
        name: 'Chikkaballapur',
        lat: 13.43,
        lon: 77.73,
        status: 'historical',
        label: { dx: 9, dy: -3, anchor: 'start' },
      },
    ],
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    kind: 'State',
    places: [
      {
        name: 'Anantapur',
        aka: 'Ananthpur',
        lat: 14.68,
        lon: 77.6,
        status: 'historical',
        label: { dx: 9, dy: 0, anchor: 'start' },
      },
    ],
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    kind: 'State',
    places: [
      {
        name: 'Ahmedabad',
        aka: 'Ahmadabad',
        lat: 23.02,
        lon: 72.57,
        status: 'historical',
        label: { dx: 9, dy: 4, anchor: 'start' },
      },
      { name: 'Bharuch', aka: 'Baruch', lat: 21.71, lon: 72.98, status: 'historical', label: { dx: 9, dy: 6, anchor: 'start' } },
    ],
  },
  {
    id: 'other',
    name: 'Other Reported Regions',
    kind: 'Regions',
    places: [
      { name: 'Kashmir', lat: 34.0, lon: 75.0, region: true, status: 'historical', label: { dx: 0, dy: -22, anchor: 'middle' } },
      { name: 'Manipur', lat: 24.7, lon: 93.9, region: true, status: 'historical', label: { dx: 0, dy: -22, anchor: 'middle' } },
      {
        name: 'West Bengal',
        lat: 23.5,
        lon: 87.9,
        region: true,
        status: 'historical',
        label: { dx: 0, dy: -22, anchor: 'middle' },
      },
    ],
  },
];

/** Additional places named in the historical account (not part of the 7-state summary above). */
export const additionalMentions = {
  outreach: {
    title: 'Outreach in Odisha',
    text: 'The historical account also mentions outreach in Odisha.',
    place: { name: 'Odisha', lat: 20.5, lon: 84.5, region: true, label: { dx: 0, dy: -22, anchor: 'middle' } },
  },
  womensWork: {
    title: 'Women’s Missionary Work',
    text: 'Women’s missionary work is mentioned in places including:',
    places: ['Madurai', 'Chennai', 'Bengaluru', 'Pallel', 'Darjeeling'],
  },
};

export const locationNotice =
  'The places listed here are drawn from the ministry’s historical account. They are not a list of current branches or offices. Locations will be marked as currently active once verified by the ministry.';
