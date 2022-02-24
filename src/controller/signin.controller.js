const express = require('express');
const mongoose = require('mongoose');
const user = require("../models/signin.model")

const router = express.Router()

router.get("",async (req,res)=>{

    try {
        const data = await user.find().lean().exec()
        return res.status(201).send(data)
        
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
})

router.post("",async(req,res)=>{


    try {
        const data = await user.create(req.body)
        return res.status(201).send(data)
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
        
    }
})

module.exports=router