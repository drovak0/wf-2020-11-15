const mongoose = require("mongoose")

const db_name = 'mongoose_demo'

mongoose
  .connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Successfully connected to ${db_name}`)
  })
  .catch((err) => console.log(`mongoose connection to ${db_name} failed:`, err))
