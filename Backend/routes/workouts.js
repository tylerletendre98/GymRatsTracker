const express = require('express');
const Workout = require('../models/user');
const router = express.Router();
const User = require('../models/user')

router.post('/newWorkout/:userId',async(req,res)=>{
    try {
        const user = await User.findById(req.params.userId)
        const workout = {
            typeofWorkout: req.body.typeofWorkout,
            caloriesBurned: req.body.caloriesBurned,
            duration:req.body.duration
        }
        workout.save()
        user.pastWorkouts.push(workout)
        user.save()
        return res.send(user)
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})