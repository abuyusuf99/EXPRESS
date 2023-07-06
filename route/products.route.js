const {Router} = require('express')
const {contactProducts} = require('../controller/products.controller')
const router = Router()
router.get('/Products', contactProducts.getProducts)
router.post('/Products', contactProducts.createProducts)
router.get('/Products/:id',contactProducts.getIdProducts)
router.delete('/Products/:id',contactProducts.deleteIdProducts)
module.exports = router
