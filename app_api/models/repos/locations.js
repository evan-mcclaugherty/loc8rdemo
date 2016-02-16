"use strict";
let sql = require('../sql/').locations; //sqlProvider for locations
module.exports = (rep) => {
    return {

        create: values => rep.none(sql.create, values),

        listByDistance: () => rep.any(sql.listByDistance),

        readOne: value => rep.one(sql.readOne, value),

        updateOne: value => rep.none(sql.updateOne, value),

        deleteOne: value => rep.none(sql.deleteOne, value)
    };
}
;
