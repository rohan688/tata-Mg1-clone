const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

router.post("", async (req,res) => {
    try{
        const product=await Product.create(req.body);
        return res.send(product);
    }catch(err){
      return res.send(err.message);
    } 
});

router.get("", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 10;
        const product=await Product.find()
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        // const totalPages = Math.ceil(
        //     (await product.find().countDocuments())/size
        // );

        // return res.send({product,totalPages});
        return res.send(product);
    }catch(err){
      return res.send(err.message);
    } 
});

module.exports=router;