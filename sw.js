const CACHE_VERSION = 'v2';
const APP_CACHE = `app-${CACHE_VERSION}`;
const TESSERACT_CACHE = 'tesseract-assets';

const APP_SHELL = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/db.js',
  './js/categories.js',
  './js/ocr.js',
  './js/ui.js',
  './js/sw-register.js',
  './manifest.json',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(APP_CACHE).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith('app-') && key !== APP_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Tesseract CDN assets — runtime cache
  if (url.hostname.includes('jsdelivr.net') || url.hostname.includes('projectnaptha.com')) {
    e.respondWith(
      caches.open(TESSERACT_CACHE).then((cache) =>
        cache.match(e.request).then((cached) => {
          if (cached) return cached;
          return fetch(e.request).then((response) => {
            if (response.ok) cache.put(e.request, response.clone());
            return response;
          });
        })
      )
    );
    return;
  }

  // App shell — cache first
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then((cached) => cached || fetch(e.request))
    );
    return;
  }

  // Everything else — network first
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
