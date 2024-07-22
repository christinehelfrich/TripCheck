const express = require("express");
const bcrypt = require("bcrypt")
const saltRounds = 10

const validatePassword = (password) => {
    let pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return pattern.test(password);
}

module.exports.isPasswordValid = (req, res, next) => {
    validateLength = validatePassword(req.body.profile.password)

    if(validateLength) {
        next()
    }else {
        res.status(400).send({error: 'error', msg: "Password wasn't long enough!"});
    }
}

module.exports.encryptPassword = (req, res, next) => {
    bcrypt
    .genSalt(saltRounds)
    .then(salt => {
      return bcrypt.hash(req.body.profile.password, salt)
    })
    .then(hash => {
      req.body.profile.password = hash
      next()
    })
    .catch(err => res.status(400).send({error: 'error', msg: "Could not encrypt password, check ByCrypt"}))

}