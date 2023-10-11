const productSchema = require('../models/ProductModel');


const getAllProducts = async (req, res) => {

    console.log("getAllProducts");
    try{

            const products = await productSchema.find();
            res.status(200).json({
                data:products
            });
    }catch(err){
            res.status(500).json({
                message:err.message
            })

    }

}
const addProduct = async (req, res) => {
    
        console.log("addProduct");
        try{
    
                const product = await productSchema.create(req.body);
                res.status(201).json({
                    data:product
                });
        }catch(err){
                res.status(500).json({
                    message:err.message
                })
    
        }
}
module.exports = {
    getAllProducts,
    addProduct
}