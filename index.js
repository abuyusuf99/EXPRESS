const express = require('express')
const app = express()
 app.use(require('./route/brands.route.js'))
 app.use(require('./route/products.route.js'))
 app.listen(4000,() =>{
    console.log('запущен');
 })