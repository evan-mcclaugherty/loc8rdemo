/*jshint esversion: 6 */
var faker = require('faker');
var pgp = require('pg-promise')({
  connect: function(client) {
    var cp = client.connectionParameters;
    console.log(cp);
    console.log("Connected to database:", cp.database);
  },
  disconnect: function(client) {
    var cp = client.connectionParameters;
    console.log("Disconnecting from database:", cp.database);
  }
});

var cn = {
  host: 'localhost',
  port: 5432,
  database: 'loc8r',
  user: 'postgres',
  password: 'POst!123'
};

// var cn = "postgres://kaybiextphfdnu:GlL1zVQlr6D-yfnAO2Dv_Xy4_b@ec2-54-225-215-233.compute-1.amazonaws.com:5432/de3r2p3bc16heg?ssl=true";
var db = pgp(cn);

module.exports = {
  pgp,
  db
};

// db.query("select * from location orderby location_id")
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log("ERROR" + error);
//   });

// OPERATING HOURS INSERT
// db.none("insert into operatinghours(days, openinghr, closinghr, closed) values($1, $2, $3, $4)", ['Sunday', 'none', 'none', true])
//   .then(function(data) {
//     console.log("SUCCESS!!!");
//   })
//   .catch(function(error) {
//     console.log("ERROR: --->" + error + "<--- END ERROR");
//   });

//LOCATION INSERTS
// var locationInsert = () => {
//   var fakes = {
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     zipCode: parseInt(faker.address.zipCode(), 10),
//     city: faker.address.city(),
//     streetAddress: faker.address.streetAddress(),
//     state: faker.address.state(),
//     email: faker.internet.email(),
//     userName: faker.internet.userName(),
//     sentences: faker.lorem.sentences(),
//     companyName: faker.company.companyName(),
//     latitude: +faker.address.latitude(),
//     longitude: +faker.address.longitude()
//   };
//   db.none("insert into location(name, street, city, state, zip, latitude, longitude) values(${companyName}, ${streetAddress}, ${city}, ${state}, ${zipCode}, ${latitude}, ${longitude})", fakes)
//     .then(function(data) {
//       console.log("SUCCESS!!!");
//     })
//     .catch(function(error) {
//       console.log("ERROR: --->" + error + "<--- END ERROR");
//     });
// };


// db.none("update location set ophours=${obj} where location_id=${loc}", {
//   obj: opHours,
//   loc: 0
// })
//   .then(function(data) {
//     console.log('SUCCESS!\n' + data + '\n');
//   })
//   .catch(function(error) {
//     console.log(error + '\n\n');
//   });
