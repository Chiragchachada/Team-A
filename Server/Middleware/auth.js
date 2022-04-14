const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')

const authenticate = async function (req, res, next) {
    console.log("Finding user");
    const user = await userModel.findOne({ email: req.body.email })

    if (user) {
        const isMatch = await user.matchPassword(req.body.password)
        if (isMatch) {
            console.log("password match");
           
            next()
        }else{
            res.status(401).json({err:"Invalid Password"})
        }
    }else{
        res.status(403).json({err:"Invalid Credentials"})
    }
}

const isAuthenticatedUser = async function(req, res, next){
     console.log("reqqqqqq",req.header)
    // extract token for req header
    const token = req.headers['authorization'];
    console.log(token);
    if(token) {
        const tokens = token.split(' ');
        console.log("split",tokens);

        // verify tthe token
        try{
            const decodedData = jwt.verify(tokens[1], "p@ssw0rd");
            console.log(decodedData);
            console.log("here");
            if(decodedData.role){
                req.role = decodedData.role
            }
            next();
        }
        catch(err){
            console.log('Error caught: ', err)
            res.status(403).json({msg:'You are not authorized to access this data'});
            // next(err);
        }
    }
    else{
        res.status(403).json({msg:'You are not authorized to access this data'})
    }
    
   
}

const authorizeRoles = (...roles) => {
    return (req, res, next)=> {
        if(roles.includes(req.role)){
            next();
        }
        else{
            res.status(403).json({err:'You dont have an authorized role to access'})
        }
    }
}

module.exports={authenticate,isAuthenticatedUser,authorizeRoles}
