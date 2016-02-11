var sql = require('../sql').locations;

module.exports = function(obj) {
  return {
    listByDistance: function() {
      return obj.none(sql.listByDistance);
    },

    create: function() {
      return obj.none(sql.create);
    },

    readOne: function() {
      return obj.none(sql.readOne);
    },

    updateOne: function() {
      return obj.none(sql.updateOne);
    },

    deleteOne: function() {
      return obj.none(sql.deleteOne);
    }
  };
};
