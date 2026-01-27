const express = require("express")
const router = express.Router();
const {getProducts,addProduct,deleteProduct} = require("../controller/productController")
const validateDto = require("../middleware/validate-dto")
const productSchema = require("../schema/productScema")

router.get('/products',getProducts)

// adding validateDTo middleware and passing the ajv schema productSchema that validate the type 
router.post('/products',validateDto(productSchema),addProduct)

router.delete('/products/:id',deleteProduct)


module.exports = router
