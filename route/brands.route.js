const {Router} = require('express')
const {contactBrands} = require('../controller/brands.controller')
const router = Router()
router.get('/Brands', contactBrands.getBrands)
router.post('/Brands', contactBrands.createBrands)
router.delete('Brands', contactBrands.deleteBrands)
module.exports = router
