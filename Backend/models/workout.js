const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    typeofWorkout:{type:String, required:true},
    caloriesBurned:{type:String, required:true},
    duration:{type:Number, required:true}
});


module.exports = mongoose.model("Workout", workoutSchema)