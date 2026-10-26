# Dying Seed Ministries — Website

Ministry profile website built with React, Vite, React Router, Motion and Lucide icons.

## Run locally

```bash
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build at http://localhost:4173
```

## Where content lives

All text and figures are in `src/data/` — edit those files rather than the components.

| File | Content |
| --- | --- |
| `ministryInfo.js` | Identity, Scripture, vision, mission, historical stats, logo/photo config, legal links |
| `history.js` | Timeline, history and founder biography |
| `ministries.js` | Mission pillars, ministries, core values, objectives, impact, ways to get involved |
| `locations.js` | Historical ministry locations (with map coordinates) |
| `prayerNeeds.js` | Ways to support, prayer needs, provision history, giving config |
| `contactInfo.js` | Office details, form endpoint, contact subjects |
| `navigation.js` | Navbar and footer links |

## Before launch — items needing confirmation

- **Office details** (`contactInfo.js`): verify each address and phone number, then set `verified: true`.
  Unverified offices show an "awaiting verification" label and are left out of the footer.
- **Contact form** (`contactInfo.js → contactConfig.formEndpoint`): set a form service URL that accepts a JSON POST.
  Until then the form validates input but tells visitors plainly that nothing was sent.
- **Statistics** (`ministryInfo.js → historicalStats.verified`): 35 missionaries / 8 associates / 7 states / ~30 ministry types
  are labelled "historically reported" until this is set to `true` with current numbers.
- **Locations** (`locations.js`): change a place's `status` to `'active'` once confirmed as a current location.
- **₹40 lakh reserve target** (`prayerNeeds.js`): shown as a historical stated target pending confirmation.
- **Historical monthly support (₹5,000–₹12,000)** (`prayerNeeds.js → provisionHistory.historicalMonthlySupport`):
  hidden until `approvedForPublication` is set to `true`.
- **Online giving** (`prayerNeeds.js → givingConfig`): stays disabled until official bank, payment and legal/tax details are verified.
- **Founder photo** (`ministryInfo.js → founder.photo`): add only an authentic, approved photograph.
- **Hero photo** (`ministryInfo.js → media.heroImage`): optional. The built-in illustration is used until a photo is set.
- **Legal pages** (`ministryInfo.js → legalLinks`): add a Privacy Policy link once the page exists.
- **Social sharing image**: `og:image` in `index.html` is a relative path; change it to the full live URL
  (e.g. `https://your-domain/images/og-image.jpg`) once the domain is known, as some platforms require absolute URLs.

## Logo

The official logo is served from `public/images/` (`logo-160/320/640.webp`, transparent background) and used by
`src/components/Logo.jsx` in the header, mobile menu and footer. The favicon (`favicon-32.png`, `apple-touch-icon.png`)
is the wheat sheaf from the logo, and `og-image.jpg` is the sharing image. To regenerate them from a new source
file, keep the same file names.

## Deployment

The site is a single-page app. `public/_redirects` (Netlify) and `vercel.json` (Vercel) send every path to
`index.html`, so refreshing on `/about` and other routes works.
