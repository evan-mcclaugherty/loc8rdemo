/*jshint esversion: 6 */
var promise = require('bluebird');

var repos = {
  locations: require('./repos/locations'),
  reviews: require('./repos/reviews'),
  users: require('./repos/users')
};
var options = {
  capTX: true,
  promiseLib: promise,
  extend: function() {
    this.locations = repos.locations(this);
    this.reviews = repos.reviews(this);
    this.users = repos.users(this);
  }
};

var pgp = require('pg-promise')(options);
pgp.pg.defaults.poolSize = 20;

var db = pgp(process.env.DATABASE_URL);

var diag = require('./diagnostics');
diag.init(options);

module.exports = {
  pgp: pgp,
  db: db
};
