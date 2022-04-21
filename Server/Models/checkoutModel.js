const mongoose = require("mongoose")
const checkoutSchema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema"},
    billingAddress: [{
        firstname: String,
        lastname: String,
        email:String,
        mobileNo:Number,
        Addressline1: String,
        Addressline2: String,
        city: String,
        state: String,
        zipCode: Number,
        country: String
        
    }],
    cart:[]
   

});

const checkout = mongoose.model("checkoutSchema", checkoutSchema)
module.exports = checkout



