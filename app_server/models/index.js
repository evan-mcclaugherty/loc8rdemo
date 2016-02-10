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
// var cn = "postgres://kaybiextphfdnu:GlL1zVQlr6D-yfnAO2Dv_Xy4_b@ec2-54-225-215-233.compute-1.amazonaws.com:5432/de3r2p3bc16heg?";
var db = pgp(process.env.DATABASE_URL + "/promise");

module.exports = {
  pgp: pgp,
  db: db
};
