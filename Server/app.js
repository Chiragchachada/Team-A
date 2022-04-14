//Import Express and Mongoose
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const app = express()
const port = 5000;


//Import Routes
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require('./Routes/userRoute')
const productRoute = require('./Routes/productRoute')
const cartRoute = require('./Routes/cartRoute')





//Connection to DB

const url = "mongodb://localhost:27017/Team-A-Project"

const connectionToDB = async () => {
    await mongoose.connect(url);
    console.log("connected successfully");
}

connectionToDB()


//Import Use
app.use(cors())
app.use(express.json())
app.use('/user', userRoutes)
app.use('/products', productRoute)
app.use('/cart', cartRoute)
app.use(errorHandler)




app.listen(port, () => console.log("running on port", port));