const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express')
const PORT = process.env.PORT || 5000
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const router = require('./routs/index')
const fileUpload = require('express-fileupload')
const path = require('path');
const ApiErrorMiddleware = require('./middleWares/ApiErrorMiddleware');


app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {credentials:true,
    origin:process.env.URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",}
))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))


app.use('/api',router)
app.use(ApiErrorMiddleware)

const start = async ()  =>{
    try {
        await mongoose.connect(`mongodb://${process.env.HOST}:${process.env.MONGO_PORT}/wintershop`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT,()=>console.log(`подключен к порту ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}


start(  )