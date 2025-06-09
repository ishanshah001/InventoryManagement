const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
const { produceEvent } = require("../kafka/producer");

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, firstname, lastname, email, password } = req.body;
    
    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing) return res.status(400).send("User already exists");

    // const passwordHash = await bcrypt.hash(password, 10);
    
    // const newUser = new User({ username, firstname, lastname, email, passwordHash });
    const newUser = new User({ username, firstname, lastname, email, password });
    await newUser.save();

    // Send kafka event
    await produceEvent("user-registered", { userId: newUser._id, username: newUser.username });

    res.status(201).send("User registered");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).send("Invalid username or password");

  // const valid = await bcrypt.compare(password, user.passwordHash);
  const valid = await password === user.password;
  if (!valid) return res.status(401).send("Invalid username or password");

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
  res.json({ token, username: user.username, role: user.role });

  // return res.redirect("/dashboard/index.html");

});

module.exports = router;
