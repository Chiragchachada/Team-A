const Product = require('../Models/productModel')
const asyncHandler = require('express-async-handler')


exports.getAllProducts = asyncHandler(async (req, res, next) => {

    console.log('getting.. ');

    const products = await Product.find();
    console.log(
        'products',
    );


    res.status(200).json({
        success: true,
        data: products
    })
})

exports.createProduct = asyncHandler(async (req, res, next) => {

    console.log('creating.. ');
    const product = await Product.create(req.body);
    //    res.json(products)

    res.status(200).json({
        success: true,
        data: product
    })

})


exports.deleteProduct = asyncHandler(async (req, res, next) => {
    console.log('De..')
    const products = await Product.findByIdAndDelete(req.params.id, req.body)

    res.status(204).json({
        success: true
    })
})