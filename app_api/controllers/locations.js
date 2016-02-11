var db = require('../models').db;

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports = function(obj) {
  return {

    locationsListByDistance: function(req, res) {

      var action = db.users.create();
      respond(action, res);

      // sendJsonResponse(res, 200, {
      //   "status": "success GET"
      // });
    },

    locationsCreate: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success POST create"
      });
    },

    locationsReadOne: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success GET Read One"
      });
    },

    locationsUpdateOne: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success PUT with ID"
      });
    },

    locationsDeleteOne: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success"
      });
    }
  };
};
