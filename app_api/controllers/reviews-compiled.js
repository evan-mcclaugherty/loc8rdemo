"use strict";

let db = require('../models').db;

module.exports = {
    reviewsCreate: (req, res) => {
        let body = req.body;
        body.locationID = req.params.locationID;
        respond(db.reviews.create(body), res);
    },

    reviewsReadOne: (req, res) => respond(db.reviews.readOne(), res),

    reviewsUpdateOne: (req, res) => respond(db.reviews.updateOne(), res),

    reviewsDeleteOne: (req, res) => respond(db.reviews.deleteOne(), res)
};

function respond(action, res) {
    action.then(data => {
        res.json({
            success: true,
            data: data
        });
    }).catch(error => {
        res.json({
            success: false,
            error: error.message || error
        });
    });
}

//# sourceMappingURL=reviews-compiled.js.map