const db = require("../config/db")

// to get all products 
const getAllProducts = async ()=>{
    const result = await db.query("SELECT * FROM products");
    return result.rows;
}


// to create new product
const addProduct = async (name,price)=>{
    const result = await db.query("INSERT INTO products(name,price) VALUES($1,$2) RETURNING *",[name,price]);
    return result.rows[0];
}

// to delete the item 
const deleteProduct = async (id)=>{
    const result = await db.query("DELETE FROM products where id = $1 RETURNING *",[id])
    // console.log(result.rows[0]);
    
    return result.rows[0]
}


module.exports = {
    getAllProducts,
    addProduct,
    deleteProduct
}