
const mongoose = require('mongoose');
const mregisterschema = new mongoose.Schema({
    
    userName: {type:String},
    password: {type:String},
    confirmationPassword: {type:String},
    phonenumber: {type:String},
    gender: {type:String},
    status: {type : String, default: "U"},
    createdAt : {type: Date, default : Date.now()}
});

module.exports=mongoose.model("register", mregisterschema, "register");
