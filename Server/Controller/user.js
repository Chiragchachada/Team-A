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
            token: token,
            user: user.username,
            userId: user._id
        })

    } else {
        console.log("User Already Exist");
        res.status(400).json({
            success: false,
            err: "User Already Exist"
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
            token:token,
            user:user.username,
            userId:user._id
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
        token:token,
        user:user.username,
        userId:user._id
    })
  }else{
      res.status(403).json({
          adminerr:"You are not admin"
      })
  }

}