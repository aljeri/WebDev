require('dotenv').config()
const express= require('express')
const app= express();
const jwt = require('jsonwebtoken')

const reviews = [
    {
      username: 'noura',
      title: 'review 1'
    },
    {
      username: 'layla',
      title: 'review 2'
    }
  ]
  
app.use(express.json())
app.get('/',authenticateToken,(req,res)=>{
    var data = reviews.filter(rev => rev.username === req.user.name)
    res.json({message:"welcome", data:data})
})
app.get('/login',(req,res)=>{
    //authentication middleware

    const username = req.body.username
    const user = {name:username}
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN)
    res.json({accessToken:accessToken})
})

function authenticateToken(req,res,next){
    const authHeader=req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token ==null) 
        return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err,user)=>{
        if(err)
            return  res.sendStatus(403)
        req.user = user
        next()
    })
}

app.listen(5400)