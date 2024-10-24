const cacheName = 'torquetrend-cache-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/manifest.json',
    'assets/images/car-charging.jpg',
    'assets/images/lithium-mine.jpg',
    'assets/images/waymo.jpg',
    'assets/images/model-s.jpg',
    'assets/images/M5.jpg',
    'assets/images/eg80.jpg',
    'assets/images/icons/icon-192x192.png',
    'assets/images/icons/icon-512x512.png',
    // Add other assets as needed
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(assetsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
