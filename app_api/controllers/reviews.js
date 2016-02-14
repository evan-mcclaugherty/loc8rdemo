"use strict";
let db = require('../models').db;

module.exports = {

    reviewsCreate: function (req, res) {
        let action = db.reviews.create();
        respond(action, res);
    },

    reviewsReadOne: function (req, res) {
        let action = db.reviews.readOne();
        respond(action, res);
    },

    reviewsUpdateOne: function (req, res) {
        let action = db.reviews.updateOne();
        respond(action, res);
    },

    reviewsDeleteOne: function (req, res) {
        let action = db.reviews.deleteOne();
        respond(action, res);
    }
};

function respond(action, res) {
    action
        .then(function (data) {
            res.json({
                success: true,
                data: data
            });
        })
        .catch(function (error) {
            res.json({
                success: false,
                error: error.message || error
            });
        });
}
