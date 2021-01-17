const PersonController = require("../controllers/person.controller")
module.exports = function (app) {
  // CRUD routes
  // Create
  app.post("/api/people", PersonController.createPerson)
  // Read
  app.get("/api", PersonController.index)
  app.get("/api/people", PersonController.getAllPeople)
  app.get("/api/people/:idd", PersonController.getPerson)
  // Update
  app.put("/api/people/:person_id", PersonController.updatePerson)
  // Delete
  app.delete("/api/people/:id", PersonController.deletePerson)
}
