//create a model for cart items
const mongoose = require("mongoose")
const cartItemSchema = new mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categorySchema"
    },
    title:String,
    price:Number,
    description:String,
    image:String,
   
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema"

    },
    quantity:{
        type:Number,
        default:1
    }
},
    { collection: "cart" });

const cartItemModel = mongoose.model("cartItemSchema", cartItemSchema)
module.exports = cartItemModel