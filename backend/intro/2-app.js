//nodemon restarts with every change
//install package.json using "npm init -y"

var http = require('http');

const server = http.createServer((req,res)=>{
    //what the user wants to do is within request message
  
    console.log(req.method)
    console.log(req.url)
    res.writeHead(200,{
        'content-type': 'text/html'  //try with text/plain
        //MIME types - check them
    }) 
    res.write('<h1>home page</h1>')
    res.end()
})

server.listen(5001)
//how to choose a port number for your server?



/*
if(url==='/')
{
    home page response
}
else{
    page not found response
}
*/