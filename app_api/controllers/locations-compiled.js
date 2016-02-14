"use strict";

let db = require('../models').db;

module.exports = {

    locationsListByDistance: (req, res) => {
        let action = db.locations.listByDistance();
        respond(action, res);
    },

    locationsCreate: (req, res) => {
        let action = db.locations.create();

        respond(action, res);
    },

    locationsReadOne: function (req, res) {
        let action = db.locations.readOne();
        respond(action, res);
    },

    locationsUpdateOne: function (req, res) {
        let action = db.locations.updateOne();
        respond(action, res);
    },

    locationsDeleteOne: (req, res) => {
        let action = db.locations.deleteOne();
        respond(action, res);
    }
};

function respond(action, res) {
    action.then(function (data) {
        res.json({
            success: true,
            data: data
        });
    }).catch(function (error) {
        res.json({
            success: false,
            error: error.message || error
        });
    });
}

//# sourceMappingURL=locations-compiled.js.map