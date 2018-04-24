importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtheroku",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.8f2572e43298dbd89a291e1e73f88864.css",
    "revision": "8f2572e43298dbd89a291e1e73f88864"
  },
  {
    "url": "/_nuxt/app.9853e8dabb5056f9ab62.js",
    "revision": "35163f321b17dc3d7e640c2517e5c4b1"
  },
  {
    "url": "/_nuxt/layouts/default.e79584eeaebc8d6fe826.js",
    "revision": "9792df59cfa3cf478a7c401628eceb69"
  },
  {
    "url": "/_nuxt/manifest.a3381d62bf8379dbfe28.js",
    "revision": "0a164a85a2e514a9cebd420bb7ef9b9c"
  },
  {
    "url": "/_nuxt/pages/example/cart.b483affe43eb736134ac.js",
    "revision": "bdcf7628d259dae2e7ae82073fac8979"
  },
  {
    "url": "/_nuxt/pages/index.b1e8633e4a13e6ae15c2.js",
    "revision": "7d555af28eba83c57747a5528b4e6d3b"
  },
  {
    "url": "/_nuxt/vendor.ea7896240d0d60c81fa4.js",
    "revision": "8a72d8f4dff9921705ea35ac18780e11"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

