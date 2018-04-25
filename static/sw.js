importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtheroku",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.5c7963a76542038fef54.js",
    "revision": "11934dfaa18a223239b9141567328b85"
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
    "url": "/_nuxt/manifest.399bdbc896eb51ab7317.js",
    "revision": "84e5b01fc17367b7b97626d8ccf37ca6"
  },
  {
    "url": "/_nuxt/pages/example/cart.8ca335fb7cc6ab6b7eb8.js",
    "revision": "b3b6c6c614ca032381c5fb200eaffe58"
  },
  {
    "url": "/_nuxt/pages/index.bde106f3379f984a3445.js",
    "revision": "8149d867e90524a693c974e56631f20b"
  },
  {
    "url": "/_nuxt/vendor.ea7896240d0d60c81fa4.js",
    "revision": "8a72d8f4dff9921705ea35ac18780e11"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

