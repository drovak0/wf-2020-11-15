const jwt = require("jsonwebtoken")

const secret = process.env.MY_SECRET

module.exports.secret = secret

module.exports.authenticate = function (req, res, next) {
  console.log(req.method, req.url)
  jwt.verify(req.cookies.mycookie, secret, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false })
    } else {
      next()
    }
  })
}
