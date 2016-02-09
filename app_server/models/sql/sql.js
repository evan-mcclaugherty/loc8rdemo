//have all sql files for Users in ./sql/Usersfolder
//have all sql fles for anything in /.sql/anythin folder.
//then have sql provider module as ./sql/index.js

var QueryFile = require('pg-promise').QueryFile;

function sql(file) {
  var relativePath = './sql/';
  return new QueryFile(relativePath + file, {minify: true});
}

var sqlProvider = {
  location: {
    add: sql('location/create.sql')
  },
  review: {
    add: sql('review/create.sql')
  },
  user: {
    add: sql('users/create.sql')
  },
};

module.exports = sqlProvider;
