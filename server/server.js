const express=require('express');
require('colors');
const morgan=require('morgan');
const connectDB =require('./config/config');
const dotenv= require('dotenv');
const { bgMagenta } = require('colors');


//config dotenv
dotenv.config()

//connection mongodb
connectDB()

const app=express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//route
app.get("/",(req,res) => {
    res.send("<h1>Hello from node server via nodemon<h1/>");
});


const port=process.env.PORT||8080
app.listen(8080, ()=>{
    console.log(`Server running on ${process.env.NODE_ENV} mode on port number ${process.env.PORT}`.bgMagenta.white);
});