const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/newUser', async(req,res)=>{
    try{
        const newUser = await User.findOne({email:req.body.email})
        if (newUser) return res.status(400).send('User already registered.');
        const user = new User({
            fullName:req.body.fullName,
            password: req.body.password,
            email:req.body.email,
            height:req.body.height,
            weight:req.body.weight
        })
        await user.save()
        return res.send(user)
    }catch(ex){
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
});

router.post('/loginUser', async (req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if (user === null) {
            return res.status(400).send(`Account with the email ${req.body.email} does not exist`);
        }else{
            return res.send(user)
        }
    } catch (ex) {
        return res.status(500).send(`Internal Server Error ${ex}.`)
    }
})