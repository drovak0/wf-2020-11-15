const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  imgUrl: {
    type: String
  },
}, {timestamps: true })

module.exports.Food = mongoose.model('Food', FoodSchema)