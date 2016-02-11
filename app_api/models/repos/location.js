var sql = require('../sql').location;

module.exports = function(obj) {

  return {
    create: function() {
      return obj.none(sql.create);
    },

    drop: function() {
      return obj.none(sql.drop);
    },

    empty: function() {
      return obj.none(sql.empty);
    },

    add: function(values) {
      return obj.one(sql.add, values)
        .then(function(user) {
          return user.id;
        });
    },

    remove: function(id) {
      return obj.result(sql.remove, id)
        .then(function(result) {
          return result.rowCount === 1;
        });
    },

    find: function(id) {
      return obj.oneOrNone(sql.find, id);
    },

    all: function() {
      return obj.any(sql.all);
    },

    total: function() {
      return obj.one(sql.total)
        .then(function(data) {
          return data.count;
        });
    }

  };
};
