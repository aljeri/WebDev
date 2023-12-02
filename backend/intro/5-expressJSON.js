const express= require('express')
const app = express()

const {products}= require('./data')

app.get('/',(req,res)=>{
    //res.json([{name:'hello'},{name:'world'}])
    //res.json(products)
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
    res.json(newP)
})

//hard coded handling! bad! setup route instead
/*app.get('/api/products/1', (req,res)=>{
    const one=products.find((product)=>product.id===1)
    res.json=(one)
})*/

//setup route instead
/*app.get('/api/products/:productID',(req,res)=>{
    console.log(req)
    console.log(req.params)
    const {productID}= req.params;
    const one = products.find((product)=>product.id===Number(productID))
    res.json(one)
})*/

//handle unexpected requests
/* 
if (!one){
    return res.status(404).send('product not found')
}
*/

//more data passed as parameters
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello')
})


app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const {search, limit} = req.query
    let sortP = [...products]; //in case no query is there
    if(search){
        sortP=sortP.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if (limit){
        sortP= sortP.slice(0,Number(limit))
    }
    if(sortP.length<1)
        res.status(200).send('no product matched')
        //res.status(200).json({success:true, data:[]})
    res.status(200).json(sortP)
})


app.listen(5001)