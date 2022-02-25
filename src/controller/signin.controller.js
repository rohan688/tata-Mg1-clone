const express = require('express');
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs')
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

    // const {emailAdd,pass,mobile } = req.body
    // const newpass = await bcrypt.hash(pass)

    try {
        const data = await user.create(req.body)
        
        
        return res.status(201).send(data)
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
        
    }
})

module.exports=router