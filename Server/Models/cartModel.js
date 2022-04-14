//create a model for cart items
const mongoose = require("mongoose")
const cartItemSchema = new mongoose.Schema({
    title:String,
    category:String,
    image:String,
    price:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"

    }
},
    { collection: "cart" });

const cartItemModel = mongoose.model("cartItemSchema", cartItemSchema)
module.exports = cartItemModel