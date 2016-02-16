"use strict";

let db = require('../models').db;

module.exports = {
    locationsCreate: (req, res) => respond(db.locations.create(req.body), res),

    locationsReadOne: (req, res) => respond(db.locations.readOne(parseInt(req.params.locationID)), res),

    locationsUpdateOne: (req, res) => respond(db.locations.updateOne(parseInt(req.params.locationID)), res),

    locationsDeleteOne: (req, res) => respond(db.locations.deleteOne(parseInt(req.params.locationID)), res)
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

//# sourceMappingURL=locations-compiled.js.map