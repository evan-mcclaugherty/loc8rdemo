"use strict";
let sql = require('../sql/index').locations;

module.exports = function(obj) {
  return {
    listByDistance: function() {
      return obj.any(sql.listByDistance);
    },

    create: function() {
      return obj.none(sql.create);
    },

    readOne: function() {
      return obj.one(sql.readOne);
    },

    updateOne: function() {
      return obj.none(sql.updateOne);
    },

    deleteOne: function() {
      return obj.none(sql.deleteOne);
    }
  };
};
