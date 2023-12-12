const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{ 
        type:String,
        required:true
    },
    roles: [{
        type:String,
        default:"user"
    }],
    active:{
        type:Boolean,
        default:true
    },
    refreshToken: String
})
userSchema.methods.toJSON = function () {
    let userObject = this.toObject();
    delete userObject.password;
    return userObject;
  };
  
module.exports= mongoose.model('User',userSchema)