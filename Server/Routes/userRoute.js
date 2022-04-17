const express = require('express')
const router = express.Router();
const {signup, login,adminlogin, getall} = require('../Controller/user');
const { authenticate } = require('../Middleware/auth');






router.route("/signup")
        .post(signup)
        

router.route("/login")
        .post(authenticate,login)
//  router.route("/login")
//         .post(login)


router.route("/adminlogin")
        .post(authenticate,adminlogin)

router.route("/getall")
        .get(getall)
        





module.exports = router
