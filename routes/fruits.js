const express = require("express");
const router = express.Router();
const Fruit = require("../models/Fruit");

router.get("/", async (req, res, next) => {
  try {
    const fruits = await Fruit.findAll();

    res.json(fruits);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const fruit = await Fruit.findByPk(req.params.id);

    res.json(fruit);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const fruit = await Fruit.create(req.body);

    res.json(fruit);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await Fruit.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log("User Updated");
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const fruit = await Fruit.findByPk(req.params.id);
    await fruit.destroy();

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
