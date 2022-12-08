const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String, required:true},
    dateOfBirth:{type: Date, required:true},
    password:{type:String, required:true},
    height:{type:Number},
    weight:{type:Number},
    pastWorkouts:{type:Array, default:[]}
});


module.exports = mongoose.model("User", userSchema)