const mongoose = require('mongoose');
const placeSchema = new mongoose.Schema({
    City: {type: String},
    Sta: {type: String},
    Stayindays: {type: String},
    SpendAmount: {type: String},
    upload: {type: String},
    place: {type: String},
    datetime: {type: String},
    Description: {type: String},
    Url: {type: String},
    ImageUrl : {type:String},
});

module.exports=mongoose.model("places", placeSchema, "places");
