//install express!
//npm install express --save
//app.get, post, put, delete, all, use, listien
const path= require('path')
const express = require('express')
const app = express()

//better put the public files to a different folder
//this below path is static and does not need any changes!
//app.use(express.static('./app'))
app.get('/', (req, res)=>{
    //invoked everytime root is called
    console.log('user hit the resource')
    res.status(200).send('home page')
    //res.sendFile(path.resolve(__dirname,'./app/index.html'))
    //adding to static assets
    // API  JSON, send data, res.JSON()
    // vs SSR Server side rendering, sends template, res.render()
    
})

app.get('/about', (req,res)=>{
    res.status(200).send('about page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})




app.listen(5001,()=>{
    console.log('server is listening at port 5001')
})


