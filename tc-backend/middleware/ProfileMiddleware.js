const express = require("express");
const bcrypt = require("bcrypt")
const saltRounds = 10

const validatePassword = (password) => {
    let pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return pattern.test(password);
}

module.exports.isPasswordValid = (req, res, next) => {
    validateLength = validatePassword(req.body.password)

    if(validateLength) {
        next()
    }else {
        res.status(400).send({error: 'error', msg: "Password was invalid! It must have at least one letter, one number, one symbol, one uppercase, and at least 8 characters."});
    }
}


module.exports.encryptPassword = (req, res, next) => {
    bcrypt
    .genSalt(saltRounds)
    .then(salt => {
      return bcrypt.hash(req.body.password, salt)
    })
    .then(hash => {
      req.body.password = hash
      next()
    })
    .catch(err => res.status(400).send(err))

}