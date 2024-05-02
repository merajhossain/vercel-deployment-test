const express = require('express');
const FoodsController = require("../controllers/FoodsController");

const router = express.Router();

//registration
router.post("/create-food-item", FoodsController.CreateFoodItem);
router.get("/all-foods", FoodsController.GetAllFoodItems);
router.get("/get-single-food/:id",FoodsController.GetSingleFood);
router.put("/food-item-update/:id",FoodsController.UpdateFoodItem);

module.exports = router;