const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const { jwt_Secret } = require("../Constants");

// ################    Sign Up    #############################

router.post("/api/v1/auth/signup", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    const isUserExist = await User.findOne({ email: email });
    if (isUserExist) {
      return res.status(400).json({ msg: "User already exists. Please login", success: false });
    }
    // Encrypt the password
    const hashpassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashpassword });
    console.log(user);

    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server error" });
  }
});

// #####################  Log In  ################################

router.post("/api/v1/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        msg: "User not found, Please Register",
      });
    }

    console.log(user);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ email: email }, jwt_Secret, {
        expiresIn: "24h",
      });

      user.token = token;

      return res.status(200).json({
        user,
        token,
      });
    } else {
      return res.status(400).json({
        msg: "Email or Password is invailid",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
    });
  }
});

// ##################  Apply for Agent  #######################

router.post("/api/v1/auth/applyForAgent", async (req, res) => {
  try {
    const { location, phone, email, bio } = req.body;

    const user = await User.findOne({ email: email });

    user.role = "Agent";
    user.agentData = { location, phone, email, bio };
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({
      msg: "Server error",
    });
  }
});

router.get("/api/v1/auth/users", async (req, res) => {
  const users = await User.find({});
  res.status(201).json({
    users: users,
  });
});

module.exports = router;
