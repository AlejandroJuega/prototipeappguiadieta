self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('fyf-v1').then(c => c.addAll([
      './', './index.html', './css/style.css', './js/app.js'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
