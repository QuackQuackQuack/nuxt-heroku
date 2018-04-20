var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello, world');
});

app.listen(process.env.PORT || 3000);

// const express = require('express')
// const { Nuxt, Builder } = require('nuxt')
// const router = require('./router')
// const app = express()
// const host = process.env.HOST || '127.0.0.1'
// const port = process.env.PORT || 3000
//
// app.set('port', port)
//
// // Import API Routes
// app.use('/api', router)

// Import and Set Nuxt.js options
// let config = require('../src/nuxt.config.js')
// config.dev = !(process.env.NODE_ENV === 'production')
//
// // Init Nuxt.js
// const nuxt = new Nuxt(config)
//
// // Build only in dev mode
// if (config.dev) {
//   const builder = new Builder(nuxt)
//   builder.build()
// }
//
// // Give nuxt middleware to express
// app.use(nuxt.render)

// Listen the server
// app.listen(port, host)
// console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
//
