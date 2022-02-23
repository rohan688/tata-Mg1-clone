const mongoose =require("mongoose");

const productSchema = new mongoose.Schema(
    {
     name:{type:String,required:true},
     image:{type:String,required:true},
     rating:{type:Number,required:true},
     mrp:{type:Number,required:true},
     price:{type:Number,required:true},
     quantity:{type:String,required:true},
     discount:{type:Number,required:true},
     category:{type:String,required:true},
     prd_highlight:{type:String,required:true}
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Product = mongoose.model("product",productSchema);

module.exports=Product;