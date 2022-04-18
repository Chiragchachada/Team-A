const express = require('express');
const { createcheckout, getcheckout } = require('../Controller/checkout');

const router = express.Router();



router.route('/')
    .post(createcheckout)
    
router.route('/')
     .get(getcheckout)



module.exports = router
