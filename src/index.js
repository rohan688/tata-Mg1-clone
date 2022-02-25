
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const signin = require('./controller/signin.controller');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://user:pass@cluster0.4xk9u.mongodb.net/amanbro?retryWrites=true&w=majority")
};


const app = express()
app.use(cors());

app.use(express.json())

app.use("/signin",signin)


app.listen(2402, async () => {
  try {
    await connect();
     console.log("listening on port 2402");
  } catch (err) {
    console.error(err.message);
  }
 
});
