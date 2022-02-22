const mongoose =require("mongoose");

const productSchema = new mongoose.Schema(
    {
     prd_name:{type:String,required:true},
     prd_img:{type:String,required:true},
     rating:{type:Number,required:true},
     price:{type:Number,required:true},
     dis_price:{type:Number,required:true},
     package_type:{type:String,required:true},
     dis_percentage:{type:Number,required:true},
     category:{type:String,required:true},
     prd_highlight:[{type:String,required:true}]
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Product = mongoose.model("product",productSchema);

module.exports=Product;