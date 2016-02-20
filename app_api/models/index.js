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

var config = {
    host: 'localhost',
    port: 5432,
    database: 'pg-promise-demo',
    user: 'postgres'
};

let db = pgp(config);

let diag = require('./diagnostics');
diag.init(options);

module.exports = {
    pgp: pgp,
    db: db
};
