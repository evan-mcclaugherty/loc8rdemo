"use strict";
let db = require('../models/index').db;

module.exports = {

  usersCreate: function(req, res) {
    let action = db.users.create();
    respond(action, res);
  },

  usersReadOne: function(req, res) {
    let action = db.users.readOne();
    respond(action, res);
  },

  usersUpdateOne: function(req, res) {
    let action = db.users.updateOne();
    respond(action, res);
  },

  usersDeleteOne: function(req, res) {
    let action = db.users.deleteOne();
    respond(action, res);
  }
};

function respond(action, res) {
  action
    .then(function(data) {
      res.json({
        success: true,
        data: data
      });
    })
    .catch(function(error) {
      res.json({
        success: false,
        error: error.message || error
      });
    });
}
