const express=require("express");

const cors = require("cors");

const connect = require("./confige/db");

const productController=require("./controllers/product.controller");
const addressController=require("./controllers/address.controller");
const { register, login } = require("./controllers/user.controller");
const User=require("./models/user.model");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/products",productController);
app.use("/address",addressController);

// /register
app.post("/register", register);
app.post("/register/login",async (req,res) => {
  try{
      const user=await User.findOne({ mobile: req.body.mobile,password:req.body.password,email:req.body.email }).lean().exec();
      if(user!==null){
        return res.send(user);
      }else{
        return res.send("null");
      }
  }catch(err){
    return res.send(err.message);
  } 
})
// .login
app.post("/login", login);

app.get("/", async(req, res)=>{
  try{
    return res.send("your server is live on heroku")
  }
  catch(err){
    return res.send(err.message);
  }
})

const port = process.env.PORT || 2222;
app.listen(port, async () => {
    try{
        await connect();
        console.log("listening on port 2222");
    }catch(err){
      console.log(err.message);
    }
})