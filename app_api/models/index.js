/*jshint esversion: 6 */
var promise = require('bluebird');

var repos = {
  location: require('./repos/location')
};

var options = {
  capT: true,
  promiseLib: promise,
  extend: function() {
    this.location = repos.location(this);
  }
};

var pgp = require('pg-promise')(options);
pgp.pg.defaults.poolSize = 20;

var db = pgp(process.env.DATABASE_URL);
module.exports = {
  pgp: pgp,
  db: db
};
