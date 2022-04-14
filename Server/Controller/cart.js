const cartModel = require('../Models/cartModel')
const asyncHandler = require('express-async-handler')

exports.addToCart = asyncHandler(async (req, res, next) => {
        console.log('creating.. ',req.body);
        const product = await cartModel.create(req.body);
        //    res.json(products)
    
        res.status(200).json({
            success: true,
            data: product
        })
    
    })
    
    exports.getCartItems = asyncHandler(async (req, res, next) => {
        console.log('getting.. ',req.body.id);
    
        const products = await cartModel.find({user:req.body.id})
        console.log(
            'products',products
        );
        
    
        res.json({
            success: true,
            data: products
        })
    
    })
    

    exports.deleteItem = asyncHandler(async (req, res, next) => {
        console.log('De..')
        const products = await cartModel.findByIdAndDelete(req.params.id, req.body)
    
        res.status(204).json({
            success: true
        })
    })


    exports.updateCart = async(req, res, next) => {

        console.log('userid.. ', req.params.productid);
    
        const updatedProduct = await Product.findByIdAndUpdate(req.params.productid, req.body)
    
         res.status(204).json({
             success: true 
         })
     
     }