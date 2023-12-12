require('dotenv').config()
const express= require('express')
const app= express();
const path=require('path')
const {logger}= require('./middleware/logger')
const cookieParser = require('cookie-parser');
const { cookie } = require('express/lib/response');
const cors= require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB= require('./config/dbConn')
const mongoose = require('mongoose')


const PORT = process.env.PORT || 3501//grap the one in the cloud server
//how to access env variables
console.log(process.env.NODE_ENV)
connectDB()
app.use(logger)
app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())
app.use('/', express.static(path.join(__dirname,'public')))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'))

})

app.use('/users',require('./routes/userRoutes'))

app.all('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views','404.html'))
    }
    else if (req.accepts('json')){
        res.json({message:"404 Not Found"})
    }
    else {
        res.type('txt').send('404 Not Found')
    }
})
//listener
mongoose.connection.once('open',()=>{
    console.log('connected to mongo')
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`)
    })
})
//listener
mongoose.connection.on('error',err=>{
    console.log(err)
})