const express = require('express')
const mongoose = require('mongoose');
const router = require('./Route/UserRoutes')
const app = express()
const cors =require("cors")

//middlewares
app.use(express.json());
app.use(cors());
app.use('/users', router)



async function connectDb() {
    try{
        await mongoose.connect('MONGODBCONNECTIONURL');
        console.log('Connected to the Mongodb')
        app.listen(5000)
    }catch(err){
        console.log(err);
    }
}

connectDb();

