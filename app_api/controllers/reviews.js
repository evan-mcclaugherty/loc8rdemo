var sql = require('../models/sql').reviews;

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports = function(obj) {
  return {

    reviewsCreate: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success"
      });
    },

    reviewsReadOne: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success"
      });
    },

    reviewsUpdateOne: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success"
      });
    },

    reviewsDeleteOne: function(req, res) {
      sendJsonResponse(res, 200, {
        "status": "success"
      });
    }
  };
};
