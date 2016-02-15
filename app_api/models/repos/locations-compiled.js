"use strict";

let sql = require('../sql').locations;
module.exports = db => {
        return {

                create: values => {
                        console.log(typeof values);
                        db.oneOrNone(sql.create, values);
                },

                listByDistance: () => db.any(sql.listByDistance),

                readOne: value => db.one(sql.readOne, value),

                updateOne: value => db.none(sql.updateOne, value),

                deleteOne: value => db.none(sql.deleteOne, value)
        };
};

//# sourceMappingURL=locations-compiled.js.map