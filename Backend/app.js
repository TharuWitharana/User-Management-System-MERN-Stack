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
        await mongoose.connect('mongodb+srv://admin:UbmBSscFfGYDzuXI@cluster0.ccuds.mongodb.net/');
        console.log('Connected to the Mongodb')
        app.listen(5000)
    }catch(err){
        console.log(err);
    }
}

connectDb();







// const express=require("express");
// const mongoose=require("mongoose");

// const app=express();

// //middlewares
// app.use("/",(req,res,next)=>{
//     res.send("It is working");
// })

// mongoose.connect('mongodb+srv://admin:UbmBSscFfGYDzuXI@cluster0.ccuds.mongodb.net/')
// .then(()=>console.log('Connected to the Mongodb'))
// .then(()=>{
//     app.listen(5000);
// })
// .catch((err)=>console.log(err));
