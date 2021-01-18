const { Food } = require("../models/food.models")

module.exports = {
  getAllFood: (req, res) => {
    Food.find({})
      .then((foods) => res.json(foods))
      .catch((err) => res.status(400).json(err))
  },
  createFood: (req, res) => {
    // const { name, category, imgUrl } = req.body
    Food.create(req.body)
      .then((food) => res.json(food))
      .catch((err) => res.status(400).json(err))
  },
  getSingleFood: (req, res) => {
    Food.findOne({ _id: req.params.idd })
      .then((food) => res.json(food))
      .catch((err) => res.status(400).json(err))
  },
  updateFood: (req, res) => {
    Food.findOneAndUpdate({ _id: req.params.iidz }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((food) => res.json(food))
      .catch((err) => res.status(400).json(err))
  },
  eatFood: (req, res) => {
    Food.deleteOne({ _id: req.params.iii })
      .then((food) => res.json(food))
      .catch((err) => res.status(400).json(err))
  },
}
