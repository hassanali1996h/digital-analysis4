// /digital-analysis4/sw.js
const cacheName = "quran-analysis-v2";
const assets = [
  "/digital-analysis4/",
  "/digital-analysis4/index.html",
  "/digital-analysis4/manifest.json",
  "/digital-analysis4/sw.js",
  "/digital-analysis4/icon-192.png",
  "/digital-analysis4/icon-512.png",
  "/digital-analysis4/surahs_full.json"
  // "/digital-analysis4/cmudict_full.js" // أضِفها فقط إذا الملف موجود فعلاً
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(assets)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== cacheName).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
