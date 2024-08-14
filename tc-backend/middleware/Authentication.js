const express = require("express");
const ProfileModel = require("../models/ProfileModel")

module.exports.authorize = (req, res, next) => {
    ProfileModel.findById(req.session._id)
        .exec(function (error, user) {
            if(error) {
                return next(error)
            } else {
                if(user === null) {
                    var err = new Error('Not authorized!');
                    err.status = 400;
                    return next(err)
                } else {
                    return res
                }
            }
        })
}