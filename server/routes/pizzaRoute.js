const express = require("express");
const router = express.Router();
const pizzaModel = require("../models/pizzaModel");

//GET ALL PIZZA || GET REQUEST
router.get("/getAllPizzas", async (req, res) => {
  try {
    const pizzas = await pizzaModel.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ missage: error });
  }
});

router.post("/addPizza", async (req, res) => { 
     const {pizza} = req.body

  try {
    const newPizza=new pizzaModel({
      name: pizza.name,
      image:pizza.image,
      varients:['small','medium','large'],
      description:pizza.description,
      category:pizza.category,
      prices:[pizza.Prices]

    })
    await newPizza.save()
    res.status(201).send('New Pizza Added')
  } catch (error) {
    res.json({ missage: error });
  }
});

module.exports = router;
