const express=require('express')
const app=express()
//req=>middleware=>res 
//helps with duplicate methods - see below

/*  //traditional way
app.get('/',(req,res)=>{
    const method=req.method;
    const url=req.url;
    const time= new Date().getFullYear();
    console.log(method, url, time)
    res.send('Home')

})
app.get('/about',(req,res)=>{
    const method=req.method;
    const url=req.url;
    const time= new Date().getFullYear();
    console.log(method, url, time)

    res.send('About')
})*/

//better to have it in separate file
const logger =(req,res,next)=>{
    const method=req.method;
    const url=req.url;
    const time= new Date().getFullYear();
    console.log(method, url, time)
    //unless you will send something here you need to pass the next method
    next()
}

app.use('/about',logger) //this will make sure it works in all routes with /api!
const authorize=require('./authorize')
app.use(authorize)
//app.use([logger,authorize])
app.get('/',logger,(req,res)=>{
    res.send('home')
})

app.get('/about',(req,res)=>{ //app.use helps here
    console.log(req.user)
    res.send('About')
})

app.listen(5001)
