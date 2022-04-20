const express = require('express');
const { createCheckout, getCheckout } = require('../Controller/checkout');

const router = express.Router();



router.route('/')
    .post(createCheckout)

router.route('/')
    .get(getCheckout)



module.exports = router
