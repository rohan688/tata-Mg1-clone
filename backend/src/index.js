const express=require("express");

const cors = require("cors");

const connect = require("./confige/db");

const productController=require("./controllers/product.controller");


const app = express();

app.use(cors());

app.use(express.json());

app.use("/products",productController);

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