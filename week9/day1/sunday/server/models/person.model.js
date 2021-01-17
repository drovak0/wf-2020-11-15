const mongoose = require("mongoose")

const PersonSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
  },
  { timestamps: true }
)
module.exports.Person = mongoose.model("Person", PersonSchema)
