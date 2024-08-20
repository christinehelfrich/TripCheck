require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
    console.log('id', id)
    console.log('process.env.TOKEN_KEY', process.env.TOKEN_KEY)
    return jwt.sign({ id }, process.env.TOKEN_KEY, { expiresIn: "1d" });
};