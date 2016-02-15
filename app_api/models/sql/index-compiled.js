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
        locationsCreate: sql('locations/create.sql'),
        locationsDeleteOne: sql('locations/deleteOne.sql'),
        locationsListByDistance: sql('locations/listByDistance.sql'),
        locationsReadOne: sql('locations/readOne.sql'),
        locationsUpdateOne: sql('locations/updateOne.sql')
    },
    reviews: {
        reviewsCreate: sql('reviews/create.sql'),
        reviewsDeleteOne: sql('reviews/deleteOne.sql'),
        reviewsReadOne: sql('reviews/readOne.sql'),
        reviewsUpdateOne: sql('reviews/updateOne.sql')
    },
    users: {
        usersCreate: sql('users/create.sql'),
        usersDeleteOne: sql('users/deleteOne.sql'),
        usersReadOne: sql('users/readOne.sql'),
        usersUpdateOne: sql('users/updateOne.sql')
    }
};

module.exports = sqlProvider;

//# sourceMappingURL=index-compiled.js.map