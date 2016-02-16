"use strict";

let QueryFile = require('pg-promise').QueryFile;

function sql(file) {
    let path = './app_api/models/sql/' + file;
    return new QueryFile(path, {
        minify: true
    });
}

let sqlProvider = {
    locations: {
        create: sql('locations/create.sql'),
        deleteOne: sql('locations/deleteOne.sql'),
        readOne: sql('locations/readOne.sql'),
        updateOne: sql('locations/updateOne.sql')
    },
    reviews: {
        create: sql('reviews/create.sql'),
        deleteOne: sql('reviews/deleteOne.sql'),
        readOne: sql('reviews/readOne.sql'),
        updateOne: sql('reviews/updateOne.sql')
    },
    users: {
        create: sql('users/create.sql'),
        deleteOne: sql('users/deleteOne.sql'),
        readOne: sql('users/readOne.sql'),
        updateOne: sql('users/updateOne.sql')
    }
};

module.exports = sqlProvider;

//# sourceMappingURL=index-compiled.js.map