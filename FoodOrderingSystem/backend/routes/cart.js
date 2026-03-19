const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const verifyToken = require("../middleware/authMiddleware");

// Add item to cart
router.post("/add", verifyToken, async (req, res) => {

  const { foodId, name, price, quantity } = req.body;

  let cart = await Cart.findOne({ userId: req.userId });

  if (!cart) {
    cart = new Cart({
      userId: req.userId,
      items: []
    });
  }

  cart.items.push({ foodId, name, price, quantity });

  await cart.save();

  res.json({ message: "Item added to cart" });

});

// Get cart
router.get("/", verifyToken, async (req, res) => {

  const cart = await Cart.findOne({ userId: req.userId });

  res.json(cart);

});

module.exports = router;