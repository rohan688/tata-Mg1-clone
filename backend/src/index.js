const express=require("express");

const cors = require("cors");

const connect = require("./confige/db");

const productController=require("./controllers/product.controller");


const app = express();

app.use(cors());

app.use(express.json());

app.use("/products",productController);


app.listen(2222, async () => {
    try{
        await connect();
        console.log("listening on port 2222");
    }catch(err){
      console.log(err.message);
    }
})