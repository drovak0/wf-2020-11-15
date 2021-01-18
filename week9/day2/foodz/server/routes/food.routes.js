const FoodController = require('../controllers/food.controller')

module.exports = (appz) => {
  // Create
  appz.post('/api/food', FoodController.createFood)
  // Read
  // get all
  appz.get('/api/food', FoodController.getAllFood)
  // get one
  appz.get('/api/food/:idd', FoodController.getSingleFood)
  // Update
  appz.put('/api/food/:iidz', FoodController.updateFood)
  // Delete
  appz.delete('/api/food/:iii', FoodController.eatFood)
}