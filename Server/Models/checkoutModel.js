const mongoose = require("mongoose")
const checkoutSchema = new mongoose.Schema({
    checkoutData:[{
        type:Array
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema"
    }
   
},
    { collection: "checkout" });

const checkout = mongoose.model("checkoutSchema", checkoutSchema)
module.exports = checkout