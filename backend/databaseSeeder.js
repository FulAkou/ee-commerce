const router = require("express").Router();
const AsyncHandler = require("express-async-handler");
const User = require("./models/User");
const Users = require("./data/User");
const Product = require("./models/Product");
const Products = require("./data/Products");

router.post(
  "/users",
  AsyncHandler(async (req, res) => {
    await User.deleteMany({});
    const UserSeeder = await User.insertMany(Users);
    res.send({ UserSeeder });
  })
);

router.post(
  "/products",
  AsyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const ProductSeeder = await Product.insertMany(Products);
    res.send({ ProductSeeder });
  })
);

module.exports = router;
