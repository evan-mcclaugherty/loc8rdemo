/*jshint esversion: 6 */
var promise = require('bluebird');

var controllers = {
  locations: require('../controllers/location'),
  reviews: require('../controllers/reviews')
};

var options = {
  capTX: true, //THANK YOU VITALY
  /*
  Having problems understanding how sqlprovider is used.
  From what I understand module.export puts variables
  in the root namespace correct?  It gets called in your
  web-api I *think* but I can't tell because the db extension
  makes it look like its directly calling a function from your
  repo folder instead of using QueryFile.
  */
  promiseLib: promise,
  extend: function() {
    this.locations = controllers.locations(this);
    this.reviews = controllers.reviews(this);
  }
};

var pgp = require('pg-promise')(options);
pgp.pg.defaults.poolSize = 20;

var db = pgp(process.env.DATABASE_URL);
module.exports = {
  pgp: pgp,
  db: db
};
