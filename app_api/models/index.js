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
    this.locations = repos.locations(this);
    this.reviews = repos.reviews(this);
    this.users = repos.users(this);
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
