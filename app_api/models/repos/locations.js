"use strict";
let sql = require('../sql').locations;

module.exports = repo => {

    return {
        listByDistance: () => repo.any(sql.listByDistance),

        create: () => repo.none(sql.create),

        readOne: value => repo.one(sql.readOne, value),

        updateOne: value => repo.none(sql.updateOne, value),

        deleteOne: value => repo.none(sql.deleteOne, value)
    };
};
