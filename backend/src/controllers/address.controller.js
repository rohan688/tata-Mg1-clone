const express = require("express");

const router = express.Router();

const Address = require("../models/address.model");

router.post("", async (req,res) => {
    try{
        const address=await Address.create(req.body);
        return res.send(address);
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 100;
        const address=await Address.find()
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        // const totalPages = Math.ceil(
        //     (await address.find().countDocuments())/size
        // );

        // return res.send({address,totalPages});
        return res.send(address);
    }catch(err){
      return res.send(err.message);
    } 
});

router.delete("/:id",async (req,res) => {
  try{
      const address = await Address.findByIdAndDelete(req.params.id,req.body).lean().exec();
      return res.send(address);
  }catch(err){
      return res.send(err.message);
  }
});

router.patch("/:id",async (req,res) => {
  try{
      const address = await Address.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
      }).lean().exec();
        return res.send(address);
  }catch(err){
      return res.send(err.message);
  }
});


module.exports=router;
