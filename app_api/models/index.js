"use strict";
let faker = require('faker');
let promise = require('bluebird');

let repos = {
  locations: require('./repos/locations'),
  reviews: require('./repos/reviews'),
  users: require('./repos/users')
};
let options = {
  capTX: true,
  promiseLib: promise,
  extend: function() {
    this.locations = repos.locations();
    this.reviews = repos.reviews();
    this.users = repos.users();
  }
};

let pgp = require('pg-promise')(options);
pgp.pg.defaults.poolSize = 20;

let db = pgp(process.env.DATABASE_URL);

let diag = require('./diagnostics');
diag.init(options);

module.exports = {
  pgp: pgp,
  db: db
};
