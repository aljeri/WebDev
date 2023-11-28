const {readFileSync} =require ('fs');
const { createServer } =require ('http');

//get all files
const homePage= readFileSync('./index.html')

const server=createServer((req,res)=>{
    if (req.url==='/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.write('error page')
        res.end()
    }

})

server.listen(5001)

//problems with regular http module!
//why do we want to use express