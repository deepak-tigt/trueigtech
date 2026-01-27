const product = require("../model/productModel")

// to get all the products
const getProducts = async (req,res)=>{
    try{
        const products = await product.getAllProducts();
        res.json(products);
    }
    catch(err){
        console.log(err);
        
        res.status(500).json({Error:err.message});
    }
}


// to add the product 
const addProduct = async (req,res)=>{
    try{
        const {name,price} = req.body;
        console.log(req.body);
        if(!name||!price){
            return res.status(400).json({error:"name and price required "});
        }
        const product1 = await product.addProduct(name,price);
        res.status(201).json({product1})
    }
    catch(err){
        console.log(err);
        
        res.status(500).json({error:err.message})
    }
}

// to delete product by its id
const deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params;
    console.log(req.params);

        if(!id){
            return res.status(400).json({error:"id required"});
        }
        const itemDel = await product.deleteProduct(id)
        if(!itemDel){
            res.status(404).json({error:"produt not found with this id "})
        }
        res.status(201).json({itemDel:"item deleted"})
    }
    catch(err){
        console.log(err);
        
        res.status(500).json({error:err})
    }
}

module.exports = {
    getProducts,
    addProduct,
    deleteProduct
}
