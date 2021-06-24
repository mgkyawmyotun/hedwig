console.log('Hello');
self.addEventListener('install', (e: any) => {
  e.waitUtils(
    (async () => {
      const cache = await caches.open('testCache');
      await cache.add(window.location.href + 'dist' + 'index.js');
    })(),
  );
});
