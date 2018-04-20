require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const { Nuxt, Builder } = __webpack_require__(2);
const router = __webpack_require__(3);
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
const app = express();

async function start() {
  let config = __webpack_require__(4);
  config.dev = !("development" === 'production');

  const nuxt = new Nuxt(config);

  if (config.dev) {
    const builder = new Builder(nuxt);
    builder.build();
  }
  app.use('/api/', router);

  function handleRequest(req, res) {
    res.set('Cache-Control', 'public, max-age=150, s-maxage=150');
    return new Promise((resolve, reject) => {
      nuxt.render(req, res, promise => {
        promise.then(resolve).catch(reject);
      });
    });
  }
  app.get('**', handleRequest);
  app.listen(port, host);
}
start();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(0);
const router = express.Router();

const navigationData = {
  navigation: [{
    "link": "/",
    "content": "Home"
  }, {
    "link": "cartexample",
    "content": "cartexample"
  }, {
    "link": "clientserver",
    "content": "clientserver"
  }]
};

const exData = {
  banner: [{
    "image": "/images/banner/banner-1.jpg"
  }, {
    "image": "/images/banner/banner-2.jpg"
  }, {
    "image": "/images/banner/banner-3.jpg"
  }, {
    "image": "/images/banner/banner-4.jpg"
  }],
  product: [{
    "id": 1,
    "image": "/images/product/1/thumb1.jpg",
    "imageHover": "/images/product/1/thumb2.jpg",
    "title": "Nike Air Max 90",
    "color": "White / Navy",
    "size": ["9", "10", "11"],
    "price": 100000,
    "unit": "WON"
  }, {
    "id": 2,
    "image": "/images/product/2/thumb1.jpg",
    "imageHover": "/images/product/2/thumb2.jpg",
    "title": "Nike Air Terra 89",
    "color": "White / Red",
    "size": ["9", "10", "11", "12", "13"],
    "price": 90000,
    "unit": "WON"
  }, {
    "id": 3,
    "image": "/images/product/3/thumb1.jpg",
    "imageHover": "/images/product/3/thumb2.jpg",
    "title": "Nike Air Force 1",
    "color": "Black / Gray",
    "size": ["9", "9.5", "10", "14"],
    "price": 140000,
    "unit": "WON"
  }, {
    "id": 4,
    "image": "/images/product/1/thumb1.jpg",
    "imageHover": "/images/product/1/thumb2.jpg",
    "title": "Nike Air Force 1",
    "color": "Black / Gray",
    "size": ["235", "240", "245", "250"],
    "price": 8000,
    "unit": "WON"
  }]
};

const CartExampleData = Object.assign({}, navigationData, exData);

router.get('/', (req, res) => {
  res.send(navigationData);
});

router.get('/cart', (req, res) => {
  res.send(CartExampleData);
});

module.exports = router;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// module.exports = {
//   buildDir: '../.nuxt/',
//   build: {
//     extractCSS: true
//   }
// }
//
//
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
  //buildDir: '../server/.nuxt/',
  /*
  ** Global CSS
  */
  //css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  // build: {
  //   vendor: ['axios'],
  //   /*
  //   ** Run ESLINT on save
  //   */
  //   extend (config, ctx) {
  //     if (ctx.isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map