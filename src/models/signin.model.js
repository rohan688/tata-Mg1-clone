const mongoose = require('mongoose');

const signinSchema = new mongoose.Schema(
  {
    emailAdd:{type:String,require:true},
    pass:{type:Number,required:true},
    mobile:{type:Number,require:true},

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports= mongoose.model("signin", signinSchema); 
