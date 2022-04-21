const mongoose = require("mongoose")
const checkoutSchema = new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema"},
    billingAddress: [{
        firstName: String,
        lastName: String,
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        zip: Number,
        country: String,
        phone: Number
    }]
   

});

const checkout = mongoose.model("checkoutSchema", checkoutSchema)
module.exports = checkout



