importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtheroku",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.7a9d2c82caba2741d21b.js",
    "revision": "4f7efc9e8fe565b968bf84e78454b6a6"
  },
  {
    "url": "/_nuxt/app.8f2572e43298dbd89a291e1e73f88864.css",
    "revision": "8f2572e43298dbd89a291e1e73f88864"
  },
  {
    "url": "/_nuxt/layouts/default.e79584eeaebc8d6fe826.js",
    "revision": "9792df59cfa3cf478a7c401628eceb69"
  },
  {
    "url": "/_nuxt/manifest.288f2cb7202608df91c2.js",
    "revision": "eff80a450e6109e5ad290d7f1d5a22a3"
  },
  {
    "url": "/_nuxt/pages/example/cart.8ca335fb7cc6ab6b7eb8.js",
    "revision": "b3b6c6c614ca032381c5fb200eaffe58"
  },
  {
    "url": "/_nuxt/pages/index.1cf305fc7af4195b7f44.js",
    "revision": "5840182fe461ad1ffdc83a1fe8e670c0"
  },
  {
    "url": "/_nuxt/vendor.ea7896240d0d60c81fa4.js",
    "revision": "8a72d8f4dff9921705ea35ac18780e11"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

