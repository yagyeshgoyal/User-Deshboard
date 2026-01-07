// import express from 'express'
const express = require('express');
// import cors from 'cors'
const cors = require('cors');
// import 'dotenv/config'
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 4000


// middleware 
app.use(express.json());
app.use(cors());

// db connec karna h
const db = require("./config/database");
db.connect();



// api
app.get('/', (req,res)=>{
    res.send("API Working");
})


const userRoute = require("./routers/userRoute")
app.use("/yogi/v1/user",userRoute);


app.listen(PORT, ()=>{console.log(`Server started on port no. ${PORT}`)})