const CACHE_NAME = 'ecommerce-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/manifest.json',
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});































// Dark Mode: Toggle between dark and light themes.
// PWA: Added service worker and manifest for offline functionality and installable app features.
// Responsive Layout: Used CSS Grid for a responsive product grid and modern UI.
// Lazy Loading: Implemented lazy loading for images.
// LocalStorage Integration: Persist cart data across sessions.
// Enhanced UI/UX: Improved visual feedback and interactions.