const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const verifyToken = require("../middleware/authMiddleware");

// Place order (protected)
router.post("/place", verifyToken, async (req, res) => {

  const order = new Order({
    userId: req.userId,
    items: req.body.items,
    totalPrice: req.body.totalPrice
  });

  await order.save();

  res.json({ message: "Order placed successfully" });

});

// Get orders
router.get("/", verifyToken, async (req, res) => {

  const orders = await Order.find({ userId: req.userId });
  res.json(orders);

});

module.exports = router;