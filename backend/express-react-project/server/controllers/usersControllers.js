const User = require('../models/User')

const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

//get all users
//route GET /users
//access private

const getAllUsers= asyncHandler(async(req,res)=>{
    const users= await User.find().select('-password').lean()
    if(!users?.length){
        return res.status(400).json({message: 'no users found'})
    }
    res.json(users)
})

const createNewUser= asyncHandler(async(req,res)=>{
    const {username, password, roles} = req.body

    if(!username || !password || !roles.length){
        return res.status(400).json({message:'all fields are required'})
    }

    const duplicate = await User.findOne({username}).lean().exec()
    if(duplicate){
        return res.status(400).json({message:"duplicate username"})
    }

    //hash password
    const hashed = await bcrypt.hash(password, 10)
    const userObj = {username,'password': hashed, roles}

    const user = await User.create(userObj)
    if(user){
        res.status(201).json({message:"user created"})
    }else{
        res.status(400).json({message:'invalid user data'})
    }
})

const updateUser= asyncHandler(async(req,res)=>{

        const {id,username,roles, active, password}= req.body
        if(!id || !username)
        {
            return res.status(400).json({message:'missing fields'})
        }
        const user = await User.findById(id).exec()

        if(!user){
            return res.status(400).json({message:'user not found'})
        }
        //check for duplicate 
        const duplicate = await User.findOne({username}).lean().exec()
        if(duplicate && duplicate?._id.toString() !==id){
            return res.status(409).json({message:'duplicate username'})
        }
        user.username=username
        user.roles= roles
        user.active = active
        if(password){
            user.password = await bcrypt.hash(password, 10)
        }
        const updatedUser = await user.save()
        res.json({message:'updated user done!'})
    })

const deleteUser= asyncHandler(async(req,res)=>{
    const {id}= req.body
    if(!id){
        return res.status(400).json({message:'user id required'})
    }
    //if you are deleting a user => all their data in other collections
    //must be deleted as well! or restrict this delete

    const user = await User.findById(id).exec()
    if(!user){
        return res.status(400).json({message:'user not found'})

    }
    const result = await user.deleteOne()
    res.json({message:`user ${result._id} deleted `})
})

module.exports= {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}