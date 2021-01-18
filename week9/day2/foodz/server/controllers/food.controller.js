const { Food } = require("../models/food.models")

module.exports = {
  getAllFood: (req, res) => {
    Food.find({})
      .then((foods) => res.json(foods))
      .catch((err) => console.log(err))
  },
  createFood: (req, res) => {
    // const { name, category, imgUrl } = req.body
    Food.create(req.body)
      .then((food) => res.json(food))
      .catch((err) => console.log(err))
  },
  getSingleFood: (req, res) => {
    Food.findOne({ _id: req.params.idd })
      .then((food) => res.json(food))
      .catch((err) => console.log(err))
  },
  updateFood: (req, res) => {
    Food.findOneAndUpdate({ _id: req.params.iidz }, req.body, { new: true })
      .then((food) => res.json(food))
      .catch((err) => console.log(err))
  },
  eatFood: (req, res) => {
    Food.deleteOne({ _id: req.params.iii })
      .then((food) => res.json(food))
      .catch((err) => console.log(err))
  },
}
