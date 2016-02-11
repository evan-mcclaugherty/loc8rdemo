/*jshint esversion: 6 */

var QueryFile = require('pg-promise').QueryFile;

function sql(file) {
  var path = '.app_server/models/sql/' + file;
  return new QueryFile(path, {
    minify: true
  });
}

var sqlProvider = {
  location: {
    add: sql('location/create.sql'),
    all: sql('location/all.sql'),
    create: sql('location/create.sql'),
    drop: sql('location/drop.sql'),
    empty: sql('location/empty.sql'),
    find: sql('location/find.sql'),
    remove: sql('location/remove.sql'),
    total: sql('location/total.sql'),
  },
  review: {
    add: sql('review/create.sql')
  },
  user: {
    add: sql('users/create.sql')
  },
};

module.exports = sqlProvider;

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
// };
