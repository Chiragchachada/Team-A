const categoryModel = require('../Models/categoryModel');
const asyncHandler = require('express-async-handler')


exports.getAll = asyncHandler(async (req, res, next) => {

    console.log('getting.. ');

    const products = await categoryModel.find();
    console.log(
        'products',
    );


    res.status(200).json({
        success: true,
        data: products
    })
})


exports.addCategory = asyncHandler(async (req, res,next)=>{
    console.log('creating.. ');
    const category = await categoryModel.create(req.body);
    //    res.json(products)

    res.status(200).json({
        success: true,
        data: category
    })
})

exports.addproduct = asyncHandler(async (req, res,next)=>{
    
    const category = await categoryModel.findById(req.params.id);
          category.products.push(req.body.products)
         category.save(function (err) {
        if (err) throw err;
        console.log('Success!');
        res.status(200).json({
            success: true,
            data: category
        })
    
      });

  
})

exports.deleteItem =asyncHandler(async (req, res, next) => {
    console.log('De..')
    const deleteitem = await categoryModel.findById(req.params.id)
    const index = deleteitem.products.findIndex(({id})=>id === req.body.id);
    if(index >=0){
        deleteitem.products.splice(index,1)
    }
    console.log("ss", req.body.id);
    deleteitem.save(function (err) {
        if (err) throw err;
        console.log('Success!');
        res.status(200).json({
            success: true,
            
        })
    
      });

    })


    exports.updatecategory = asyncHandler(async(req, res, next) => {

        console.log('userid.. ', req.params.id);
    
        const updatedCategory = await categoryModel.findByIdAndUpdate(req.params.id, req.body)
          console.log(updatedCategory);
         res.status(204).json({
             success: true 
         })
     
     })


     exports.addreview = asyncHandler(async (req, res,next)=>{
    
        const find = await categoryModel.findById(req.params.id);
        const product = find.products.find((e)=> e.id === req.body.id)
    
              product.reviews.push(req.body.reviews)
             find.save(function (err) {
            if (err) throw err;
            console.log('Success!');
            res.status(200).json({
                success: true,
                data: product
            })
        
          });
    
      
    })


    // exports.product = asyncHandler(async (req, res, next) => {

    //     console.log('getting.. ');
    
    //     const products = await categoryModel.findById(req.params.id);
    //     console.log(
    //         'products',
    //     );
    
    
    //     res.status(200).json({
    //         success: true,
    //         data: products
    //     })
    // })