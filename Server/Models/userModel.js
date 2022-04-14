const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        // validation on email
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minLength: 6
    },
    username:{
        type:String
    },
    role: {
        type: String,
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
},
{collection:"User"});


userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt =await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}
userSchema.methods.getSignedJwtToken = function(){
    const token = jwt.sign({id:this._id, username:this.username, role:this.role}, "p@ssw0rd",{
        expiresIn: "30d"
    })
    return token;
}

const userModel = mongoose.model("userSchema", userSchema)
module.exports = userModel