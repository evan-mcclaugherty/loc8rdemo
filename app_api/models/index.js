/*jshint esversion: 6 */
var promise = require('bluebird');

var repos = {

  locations: require('./repos/locations'),
  reviews: require('./repos/reviews')
};

var options = {
  capTX: true,
  promiseLib: promise,
  extend: function() {
    this.locations = repos.locations;
    this.reviews = repos.reviews;
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

db.any("select test from test")
  .then(function(data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
