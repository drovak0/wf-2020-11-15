const express = require("express")
const port = 8000

require("./configz/mongoose.configg")

const app = express()

// req.body undefined without this!
app.use(express.json())

require("./routes/city.routes")(app)

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
)
