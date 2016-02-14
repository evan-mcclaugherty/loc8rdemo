"use strict";

let promise = require('bluebird');

let repos = {
    locations: require('./repos/locations'),
    reviews: require('./repos/reviews'),
    users: require('./repos/users')
};
let options = {
    promiseLib: promise,
    extend: obj => {
        obj.locations = repos.locations(obj);
        obj.reviews = repos.reviews(obj);
        obj.users = repos.users(obj);
    }
};

let pgp = require('pg-promise')(options);

let db = pgp(process.env.DATABASE_URL);

let diag = require('./diagnostics');
diag.init(options);

module.exports = {
    pgp: pgp,
    db: db
};

//# sourceMappingURL=index-compiled.js.map