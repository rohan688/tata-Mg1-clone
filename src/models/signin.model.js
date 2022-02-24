const mongoose = require('mongoose');

const signinSchema = new mongoose.Schema(
  {
mobileNumber:{type:Number,require:true,unique:true},
otp:{type:Number,required:true},
email:{type:String,require:true,unique:true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports= mongoose.model("signin", signinSchema); 
