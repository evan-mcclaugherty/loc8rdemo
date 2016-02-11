var sql = require('../models/sql').locations;

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports = function(obj) {
  return {
    locationsListByDistance: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success"
      });
    },

    locationsCreate: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success"
      });
    },

    locationsReadOne: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success"
      });
    },

    locationsUpdateOne: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success"
      });
    },

    locationsDeleteOne: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success"
      });
    }
  };
};
