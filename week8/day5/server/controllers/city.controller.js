const City = require("../models/city.model")

// export an object that is full of methods
module.exports = {
  // long-form - key: value format
  create: function (req, res) {
    console.log("create method executed")
    // .create is async, we don't know exactly when it will finish, so it returns a promise
    // which we need to use .then to know when it's fulfilled
    // req.body is the data in the form that was POSTed or the data POSTed from postman
    City.create(req.body)
      // city is just a param name, can be named anything
      // this is the newly created city that the db returned
      .then((city) => {
        res.json(city)
      })
      .catch((err) => {
        res.json(err)
      })
  },
  read: function (req, res) {
    console.log("read method executed")

    City.find()
      .then((cities) => {
        res.json(cities)
      })
      .catch((err) => {
        res.json(err)
      })
  },
}
