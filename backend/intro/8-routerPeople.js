//handle different routes
//this component will be used in the original .js file
const express=require('express')
const router = express.Router();
let {people} =require('./data')
//this becomes the new base root under 'api/people'
router.get('/',(req,res)=>{
    res.send('testing')
})

module.exports= router


//in app.js
// const people = require('./router')
// app.use('api/people',people)