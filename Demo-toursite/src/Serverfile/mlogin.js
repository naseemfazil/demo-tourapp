const mongoose = require('mongoose');
const mloginlSchema = new mongoose.Schema({
    
    userName: {type:String},
     password: {type:String}
});

module.exports=mongoose.model("login", mloginlSchema, "login");
