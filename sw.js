const CACHE_NAME = 'aihub-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/logo-seyed.png'
];

// نصب سرویس‌ورکر و کش کردن فایل‌ها
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('✅ فایل‌ها کش شدند');
      return cache.addAll(urlsToCache);
    })
  );
});

// فعال‌سازی و پاک‌سازی کش‌های قدیمی
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            console.log('🧹 حذف کش قدیمی:', name);
            return caches.delete(name);
          }
        })
      )
    )
  );
});

// هندل کردن درخواست‌ها
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // اگر فایل در کش بود، همونو بده؛ اگر نبود، از شبکه بگیر
      return response || fetch(event.request);
    })
  );
});
