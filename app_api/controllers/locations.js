"use strict";
let db = require('../models').db;

module.exports = {
    locationsCreate: (req, res)=> {
        db.locations.create(req)
            .then(data => {
                res.json({
                    success: true,
                    data: data
                })
            })
            .catch(error => {
                res.json({
                    success: false,
                    error: error.message || error
                })
            })
    },

    locationsListByDistance: (req, res) => {
        let action = db.locations.listByDistance();
        respond(action, res);
    },

    locationsReadOne: (req, res) => {
        let action = db.locations.readOne();
        respond(action, res);
    },

    locationsUpdateOne: (req, res) => {
        let action = db.locations.updateOne();
        respond(action, res);
    },

    locationsDeleteOne: (req, res) => {
        let action = db.locations.deleteOne();
        respond(action, res);
    }
};


function respond(action, res) {
    action
        .then(data => {
            res.json({
                success: true,
                data: data
            });
        })
        .catch(error => {
            res.json({
                success: false,
                error: error.message || error
            });
        });
}