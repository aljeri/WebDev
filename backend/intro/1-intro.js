//http module
//before we go and use express 

var http = require('http');
const server= http.createServer((req,res)=>{
    console.log(req)
    if(req.url==='/'){
        res.end('welcome to our page')
     }
     if(req.url==='/about'){
        res.end('here is about us')
    } 
    res.end(` <h1>ops!</h1>`)
})

server.listen(5001)