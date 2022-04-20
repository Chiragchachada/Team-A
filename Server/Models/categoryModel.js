const mongoose = require("mongoose")



const categorySchema = new mongoose.Schema({
   category:{
       type:String,
       required:[true, 'Please enter Category Name']
   },
   categorypic:{
       type:String},
   products:[
       {
        title:String,
        image:String,
        price:Number,
        description:String,
        reviews:[{
            name:String,
            comment:String,
            emailid:String,
            createdAt: {
                type: Date,
                default: Date.now()
            }

        }]
        
       }
   ]
   
    
},
{collection:"Categories"});



const categoryModel = mongoose.model("categorySchema", categorySchema)
module.exports = categoryModel