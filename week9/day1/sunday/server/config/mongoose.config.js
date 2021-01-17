const mongoose = require("mongoose")

// ! change route of url to new db

mongoose
  .connect("mongodb://localhost/sunday", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  )
