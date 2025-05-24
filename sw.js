// هذا هو Service Worker لتخزين الملفات مؤقتًا (Caching)

const cacheName = "quran-analysis-v1";
const assets = [
  "/Ashamed-almjed/",
  "/Ashamed-almjed/index.html",
  "/Ashamed-almjed/manifest.json",
  "/Ashamed-almjed/sw.js",
  "/Ashamed-almjed/icon-192.png",
  "/Ashamed-almjed/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
