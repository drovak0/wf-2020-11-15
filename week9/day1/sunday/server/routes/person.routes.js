const PersonController = require("../controllers/person.controller")
module.exports = function (app) {
  // CRUD routes
  app.get("/api", PersonController.index)
  app.post("/api/people", PersonController.createPerson)
  app.get("/api/people", PersonController.getAllPeople)
  app.get("/api/people/:idd", PersonController.getPerson)
}
