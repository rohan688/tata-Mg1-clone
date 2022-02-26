require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    // we will try to find the user with the email provided
    let user = await User.findOne({ mobile: req.body.mobile}).lean().exec();

    // if the user is found then it is an error
    if (user){
      return res.status(400).send("null");
    }else{
        // if user is not found then we will create the user with the email and the password provided
    user = await User.create(req.body);

    // user = new User()
    // user.email = req.body.email
    // user.password = req.body.password
    // user.save();

    // then we will create the token for that user
    const token = newToken(user);

    // then return the user and the token

    return res.send({ user, token });
    }

  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    // we will try to find the user with the email provided
    const user = await User.findOne({ email: req.body.email });

    // If user is not found then return error
    if (!user)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });

    // if user is found then we will match the passwords
    const match = user.checkPassword(req.body.password);

    if (!match)
      return res
        .status(400)
        .send({ message: "Please try another email or password" });

    // then we will create the token for that user
    const token = newToken(user);

    // then return the user and the token
    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { register, login };
