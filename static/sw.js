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
    "url": "/_nuxt/app.ae9eab1154e4a6c4cdbc.js",
    "revision": "8a0e30d68b4c374c435a70341075b88e"
  },
  {
    "url": "/_nuxt/layouts/default.55a65b08fa5ac138ab32.js",
    "revision": "57769c52b809c8ffa64447b174f3a2e1"
  },
  {
    "url": "/_nuxt/manifest.8d3932eea1f6f1fffdf1.js",
    "revision": "c93098947cf356727e54049a269c31b1"
  },
  {
    "url": "/_nuxt/pages/example/cart.56117da33dd1e846bc5f.js",
    "revision": "0d7c5f11a31c1563c4869312313126d7"
  },
  {
    "url": "/_nuxt/pages/index.2fe52210b3bbf1c41866.js",
    "revision": "63418e828d06dbd65deb60c12cfb2183"
  },
  {
    "url": "/_nuxt/vendor.ea7896240d0d60c81fa4.js",
    "revision": "8a72d8f4dff9921705ea35ac18780e11"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

