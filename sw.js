var urlsKeCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/js/app.js',
  '/manifest.json',
  '/images/icons/app-icon-48x48.png',
  '/images/icons/app-icon-96x96.png',
  '/images/icons/app-icon-144x144.png',
  '/images/icons/app-icon-192x192.png',
  '/images/icons/app-icon-256x256.png',
  '/images/icons/app-icon-384x384.png',
  '/images/icons/app-icon-512x512.png',
  '/images/about-header.jpg',
  '/images/contact-image.jpg',
  '/images/example-blog01.jpg',
  '/images/example-blog02.jpg',
  '/images/example-blog03.jpg',
  '/images/example-blog04.jpg',
  '/images/example-blog05.jpg',
  '/images/example-blog06.jpg',
  '/images/example-blog07.jpg',
  '/images/example-work01.jpg',
  '/images/example-work02.jpg',
  '/images/example-work03.jpg',
  '/images/example-work04.jpg',
  '/images/example-work05.jpg',
  '/images/example-work06.jpg',
  '/images/example-work07.jpg',
  '/images/example-work08.jpg',
  '/images/example-work09.jpg',
  '/images/footer-background.png',
  '/images/header-bg.jpg',
  '/images/logo.png',
  '/images/photo-wide.jpg',
  '/images/photo.jpg',
  '/images/portfolio-example-01.jpg',
  '/images/portfolio-example-02.jpg',
  '/images/portfolio-example-03.jpg',
  '/images/portfolio-example-04.jpg',
  '/images/portfolio-example-05.jpg',
  '/images/portfolio-example-06.jpg',
  '/about.html',
  '/blog.html',
  '/contact.html',
  '/portfolio-example01.html',
  '/material.min.js',
  '/favicon.ico',
  '/material.grey-pink.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open("cache_ku")
      .then((cache) => cache.addAll(urlsKeCache))
      .catch((error) => console.log(error))
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((response) => {
          return caches.open("cache_ku")
            .then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
        });
    })
    .catch((error) => console.log(error))
);
});