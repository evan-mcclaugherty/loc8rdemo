/*
  Adds a new product for a specified user;
  Parameter names come directly from the HTTP handler ${userId} and ${name}
*/
INSERT INTO Location(userID, name)
VALUES(${userId}, ${name})
RETURNING id;
