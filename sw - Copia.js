self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('calc3d').then(cache => {
      return cache.addAll([
        './',
        './index.html'
      ]);
    })
  );
});
