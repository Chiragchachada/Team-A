const express = require('express');
const { getAll, addCategory , addproduct, deleteItem, updatecategory, addreview, product} = require('../Controller/category');
const categoryModel = require('../Models/categoryModel');
const router = express.Router();


router.route('/')
    .get(getAll)
    .post(addCategory)

    router.route('/addproduct/:id')
    // .get(addproduct)
    .post(addproduct)
    
    router.route('/delete/:id')
    // .get(addproduct)
    .delete(deleteItem)

    router.route('/update/:id')
        .put(updatecategory)

    router.route('/addreview/:id')
        .post(addreview)

    
        
module.exports = router

