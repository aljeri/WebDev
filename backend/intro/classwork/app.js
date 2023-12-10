var express= require('express')
var app = express()

const {products}= require('../data')

app.get('/', (req,res)=>{
    //res.json([{name:'hello'},{name:'world'}])
    console.log('user trying to connect')
    res.send(`<h1>home page</h1>
    <a href='/api/products'>products</a> `)
})
app.get('/api/products',(req,res)=>{
    //res.json(products)
    //what if we want to send specific details only
    const newP= products.map((product)=>{
        const{id,name,image}= product;
        return {id,name,image}

    })
    res.json(products)
})
app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.all('/test',(req,res)=>{
    console.log(req.query)
    res.send('hello')
})
app.all('*', (req,res)=>{
    res.status(404).send(`<h1> Page not found</h1>`)
})
app.listen(5001,()=>{
    console.log('the  is listening at port 5001')
})