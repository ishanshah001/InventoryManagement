// backend/models/Diamond.js
const mongoose = require("mongoose");

const diamondSchema = new mongoose.Schema({
  carat: Number,
  cut: String,
  color: String,
  clarity: String,
  price: Number,
  shape: String,
  certification: String,
}, { collection: 'diamond' });

module.exports = mongoose.model("Diamond", diamondSchema);
