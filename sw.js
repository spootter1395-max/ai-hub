const CACHE_NAME = 'ai-hub-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/Ahange Yaram Be Yek [SevilMusic].mp3',
  '/copilot_image_1756070366796.jpeg',
  '/images/chatgpt-icon.png',
  '/images/whatsapp-icon.png',
  '/images/telegram-icon.png',
  '/images/looka-icon.png',
  '/images/canva-icon.png',
  '/images/freepik-icon.png',
  '/images/picsart-icon.png',
  '/images/removebg-icon.png',
  '/images/crello-icon.png',
  '/images/json-icon.png',
  '/images/chartgo-icon.png',
  '/images/extracttable-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
