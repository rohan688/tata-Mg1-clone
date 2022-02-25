const mongoose =require("mongoose");

const addressSchema = new mongoose.Schema(
    {
     flat_no:{type:String,required:true},
     landmark:{type:String,required:false},
     pincode:{type:Number,required:true},
     locality:{type:String,required:true},
     city:{type:String,required:true},
     state:{type:String,required:true},
     customer_name:{type:String,required:true},
     mobile:{type:Number,ref:"user",required:true},
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Address = mongoose.model("address",addressSchema);

module.exports=Address;