//Import Express and Mongoose
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const app = express()
const port = 5000;


//Import Routes
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require('./Routes/userRoute')
const cartRoute = require('./Routes/cartRoute')
const categoryRoute = require('./Routes/categoryRoute')






//Connection to DB

const url = "mongodb+srv://User1:User1@cluster0.w0qdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectionToDB = async () => {
    await mongoose.connect(url);
    console.log("connected successfully");
}

connectionToDB()


//Import Use
app.use(cors())
app.use(express.json())
app.use('/user', userRoutes)
app.use('/cart', cartRoute)
app.use('/category', categoryRoute)
app.use(errorHandler)




app.listen(port, () => console.log("running on port", port));