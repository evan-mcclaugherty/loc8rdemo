"use strict";

let db = require('../models').db;

module.exports = {
    usersCreate: (req, res) => respond(db.users.create(req.body), res),

    usersReadOne: (req, res) => respond(db.users.readOne(), res),

    usersUpdateOne: (req, res) => respond(db.users.updateOne(), res),

    usersDeleteOne: (req, res) => respond(db.users.deleteOne(), res)
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

//# sourceMappingURL=users-compiled.js.map