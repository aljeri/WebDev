const authorize = (req,res,next)=>{
    const {user}= req.query;
    if(user=== 'someone'){
        req.user={name:'someone',id:3}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}
module.exports= authorize