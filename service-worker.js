const CACHE_NAME = 'andy-growth-v4'
const APP_SHELL = [
  './',
  './index.html',
  './team.html',
  './team.css',
  './team-data.js',
  './team.js',
  './styles.css',
  './script.js',
  './site.webmanifest',
  './assets/global-city-lights.jpg',
  './assets/google-ads-icon.svg',
  './assets/meta-logo.svg',
  './assets/tiktok-logo.svg',
  './assets/icon-192.png',
  './assets/icon-512.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  const requestUrl = new URL(event.request.url)
  if (requestUrl.origin !== self.location.origin) return

  if (event.request.mode === 'navigate') {
    const fallback = requestUrl.pathname.endsWith('/team.html') ? './team.html' : './index.html'
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(fallback, copy))
          return response
        })
        .catch(() => caches.match(fallback)),
    )
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy))
        }
        return response
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true })),
  )
})
