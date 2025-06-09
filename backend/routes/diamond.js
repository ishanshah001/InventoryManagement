// routes/diamond.js
const express = require("express");
const router = express.Router();
const Diamond = require("../models/Diamond"); // or your correct model path
const { produceEvent } = require("../kafka/producer"); // if applicable

router.get("/search", async (req, res) => {
  try {
    const { cut, color, shape } = req.query;

    // Build filter object only for present query params
    const filter = {};
    if (cut) filter.cut = cut.toLowerCase();
    if (color) filter.color = color.toLowerCase();
    if (shape) filter.shape = shape.toLowerCase();

    const diamonds = await Diamond.find(filter);
    await produceEvent("diamond-search", { filter, timestamp: Date.now() });
  
    res.json(diamonds);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.post("/click", async (req, res) => {
  try {
    const { diamondId } = req.body;
    if (!diamondId) return res.status(400).json({ error: "diamondId required" });

    // Send event to Kafka
    await produceEvent("diamond-clicks", { diamondId, timestamp: Date.now() });

    res.json({ success: true, message: "Diamond click recorded" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
