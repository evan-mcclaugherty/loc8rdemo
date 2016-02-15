"use strict";

let sql = require('../sql/index').reviews;

module.exports = function (obj) {
  return {
    create: function () {
      return obj.none(sql.create);
    },
    deleteOne: function () {
      return obj.none(sql.deleteOne);
    },
    readOne: function () {
      return obj.one(sql.readOne);
    },
    updateOne: function () {
      return obj.one(sql.updateOne);
    }
  };
};

//# sourceMappingURL=reviews-compiled.js.map