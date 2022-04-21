const express = require('express');
const { getCartItems, addToCart, deleteItem, updateCart} = require('../Controller/cart');

const router = express.Router();



router.route('/create')
    .post(addToCart)
    
router.route('/user')
     .post(getCartItems)

router.route('/:id')
    .delete(deleteItem)

router.route('/updatecart/:productid')
    .patch(updateCart) 
module.exports = router

