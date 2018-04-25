importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxtheroku",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.67b60720561d6685c76c.js",
    "revision": "023be9e36ed62aa5fd7367150dcabf8f"
  },
  {
    "url": "/_nuxt/app.8f2572e43298dbd89a291e1e73f88864.css",
    "revision": "8f2572e43298dbd89a291e1e73f88864"
  },
  {
    "url": "/_nuxt/layouts/default.55a65b08fa5ac138ab32.js",
    "revision": "57769c52b809c8ffa64447b174f3a2e1"
  },
  {
    "url": "/_nuxt/manifest.946b8ef0898757891628.js",
    "revision": "bde7e7142f3bb25d638e42271cef83fc"
  },
  {
    "url": "/_nuxt/pages/example/cart.2f67c9874658f22f415c.js",
    "revision": "4586be0c4221b090b3d6eaf02d6ab14c"
  },
  {
    "url": "/_nuxt/pages/index.fddd01a11dab4e56f5f4.js",
    "revision": "7c779af0e9f258b0aa0bf7836fd51e2f"
  },
  {
    "url": "/_nuxt/vendor.ea7896240d0d60c81fa4.js",
    "revision": "8a72d8f4dff9921705ea35ac18780e11"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

