const express= require('express')
//const {readFileSync} =require ('fs');
const app=express()
let{people}= require('./data')
//const homePage= readFileSync('./public-methods/index.html')

//static assets
app.use(express.static('./public-methods'))
//parse from data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())

//read data (GET)
app.get('/api/people',(req,res)=>{
    res.status(200).json({success: true, data:people})
    
})
//the below line help with fetching request body
// (POST)
app.post('/login',(req,res)=>{
    console.log("body: ", req.body)
    const {name}= req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide data')
})
//POST for javascript
app.post('/api/people',(req,res)=>{
    console.log(req.query)
    const {name}= req.query
    console.log(name)
    if(!name){
        return res
            .status(400)
            .json({success:false, msg:'please provide name'})
    }
    res.status(201).json({success:true,person:name})
})

//Update data (PUT)
app.put('/api/people/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    console.log(id,name)
    
    const person=people.find((person)=>person.id===Number(id))
    if(!person){
        return res.status(404).json({success:false, msg:`no person found ${id}`})

    }
    const newPeople = people.map((person)=>{
        if(person.id ===Number(id)){
            person.name=name
        }
        return person
    })
    res.status(200).json({success:true,data:newPeople})

})
//Delete data (DELETE)
app.delete('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    const person= people.find((person)=> person.id===Number(id))

    if(!person){
        return res.status(404).json({success:false, msg:`no person found ${id}`})

    }
    const newPeople = people.filter((person)=>person.id != Number(id))
    return res.status(200).json({success:true, data:newPeople})
})


app.listen(5001)