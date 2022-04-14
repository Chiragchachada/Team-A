const mongoose = require("mongoose")



const productSchema = new mongoose.Schema({
    title:String,
    category:String,
    image:String,
    price:Number
    
},
{collection:"Products"});



const productModel = mongoose.model("productSchema", productSchema)
module.exports = productModel