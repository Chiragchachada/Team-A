const userModel = require('../Models/userModel');
const asyncHandler = require('express-async-handler');


exports.signup = asyncHandler(async (req, res, next) => {
    const findUser = await userModel.findOne({ email: req.body.email })
    if (!findUser) {

        console.log("Creating User");
        const user = await userModel.create(req.body)
        const token = user.getSignedJwtToken();
        console.log(token)
        res.status(200).json({
            auth: true,
            token: token
        
        })

    } else {
        console.log("User Already Exist");
        res.status(400).json({
            success: false,
            existerr: "User Already Exist"
        })
    }

}
)

exports.login = asyncHandler(async (req, res, next) => {
    const user = await userModel.findOne({ email: req.body.email })
    const token = user.getSignedJwtToken();
    if(user.role === "user"){
        res.json({
            auth:true,
            token:token
            
        })
      }else{
          res.status(403).json({
              usererr:"You are not user"
          })
      }

})

exports.adminlogin = async(req,res,next)=>{
    const user = await userModel.findOne({email:req.body.email})
    const token = user.getSignedJwtToken();
  if(user.role === "admin"){
    res.json({
        auth:true,
        token:token
        
    })
  }else{
      res.status(403).json({
          adminerr:"You are not admin"
      })
  }

}

exports.getall = async (req, res, next) => {
    console.log('getting.. ',req.body.id);

    const user = await userModel.find()
    //  .exec(function(err, products) {
    //     if (err) return res.send(err)
    //     res.send(products)
    //     })
    

    res.json({
        success: true,
        data: user
    })

}
