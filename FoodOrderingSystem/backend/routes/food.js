const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

// Get all food items
router.get("/", async (req, res) => {
    const foods = await Food.find();
    res.json(foods);
});
router.put("/update/:id", async (req, res) => {

  await Food.findByIdAndUpdate(req.params.id, req.body);

  res.json({ message: "Food updated successfully" });

});
router.delete("/delete/:id", async (req, res) => {

  await Food.findByIdAndDelete(req.params.id);

  res.json({ message: "Food deleted successfully" });

});

// Add food item
router.post("/add", async (req, res) => {
    const food = new Food(req.body);
    await food.save();
    res.json({ message: "Food added successfully" });
});

module.exports = router;
