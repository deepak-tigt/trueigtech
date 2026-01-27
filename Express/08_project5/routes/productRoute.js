const express = require("express")
const router = express.Router();
const {getProducts,addProduct,deleteProduct} = require("../controller/productController")

router.get('/products',getProducts)

router.post('/products',addProduct)

router.delete('/products/:id',deleteProduct)


module.exports = router
