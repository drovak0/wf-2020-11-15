const mongoose = require('mongoose')

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      'Must have name'
    ],
    minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
  },
  category: {
    type: String,
    required: [
      true,
      'Must have category'
    ],
    minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
  },
  imgUrl: {
    type: String,
    required: [
      true,
      'Must have imgUrl'
    ],
    minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
  },
}, {timestamps: true })

module.exports.Food = mongoose.model('Food', FoodSchema)