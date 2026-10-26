/* Dying Seed Ministries — service worker.
 * Pages: network first, falling back to the cached app shell when offline.
 * Static files (build assets, images, fonts): served from cache, refreshed in the background.
 * The contact API and all non-GET requests always go straight to the network.
 * Bump VERSION to discard old caches.
 */
const VERSION = 'v1';
const SHELL_CACHE = `dsm-shell-${VERSION}`;
const ASSET_CACHE = `dsm-assets-${VERSION}`;
const SHELL = ['/', '/manifest.webmanifest', '/images/logo-160.webp', '/images/logo-320.webp', '/images/icon-192.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => ![SHELL_CACHE, ASSET_CACHE].includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.pathname.startsWith('/api/')) return;

  // Page navigations: always try the network so visitors get the latest site.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(SHELL_CACHE).then((cache) => cache.put('/', copy));
          return response;
        })
        .catch(() => caches.match('/'))
    );
    return;
  }

  const isStatic =
    (url.origin === self.location.origin && /^\/(assets|images)\//.test(url.pathname)) ||
    url.origin === 'https://fonts.googleapis.com' ||
    url.origin === 'https://fonts.gstatic.com';
  if (!isStatic) return;

  // Stale-while-revalidate for static files.
  event.respondWith(
    caches.open(ASSET_CACHE).then(async (cache) => {
      const cached = await cache.match(request);
      const network = fetch(request)
        .then((response) => {
          if (response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
