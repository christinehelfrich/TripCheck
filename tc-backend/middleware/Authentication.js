const Profile = require("../models/ProfileModel")
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    console.log('req TOK: ', req.cookies.token)
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    console.log('data: ', data)
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await Profile.findById(data.id)
      if (user) next()
      else return res.json({ status: false })
    }
  })
}