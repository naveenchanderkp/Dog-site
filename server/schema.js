const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:false},
    password:{type:String,required:true}

})

const User = mongoose.model('User',user)

module.exports = User