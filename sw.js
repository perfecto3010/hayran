const cacheName = 'Gahez-v3.3';
const assets = [
  './',
  './index.html',
  './gamedata.js',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/833/833472.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
