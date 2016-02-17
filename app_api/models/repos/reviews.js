"use strict";
let sql = require('../sql/').reviews; //sqlProvider for reviews
module.exports = (db) => {
    return {

        create: values => {
            console.log(values);
            return db.oneOrNone(sql.create, values)
        },

        readOne: value => db.one(sql.readOne, value),

        updateOne: value => db.none(sql.updateOne, value),

        deleteOne: value => db.none(sql.deleteOne, value)
    };
};