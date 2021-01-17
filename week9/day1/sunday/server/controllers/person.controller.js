const { Person } = require("../models/person.model")

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  })
}

module.exports.createPerson = (request, response) => {
  const { firstName, lastName } = request.body

  Person.create({
    firstName,
    lastName,
  })
    .then((person) => response.json(person))
    .catch((err) => response.json(err))
}

module.exports.getAllPeople = (request, response) => {
  Person.find({})
    .then((persons) => response.json(persons))
    .catch((err) => response.json(err))
}

module.exports.getPerson = (request, response) => {
  Person.findOne({ _id: request.params.idd })
    .then((person) => response.json(person))
    .catch((err) => response.json(err))
}

module.exports.updatePerson = (request, response) => {
  Person.findOneAndUpdate({ _id: request.params.person_id }, request.body, {
    new: true,
  })
    .then((updatedPerson) => response.json(updatedPerson))
    .catch((err) => response.json(err))
}

module.exports.deletePerson = (request, response) => {
  Person.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err))
}
