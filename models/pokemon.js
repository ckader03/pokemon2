// models/pokemon.js
const db = require('../db');

// this object is going to contain all of the sql queries 
// communicate with the database
const Pokemon = {};

// .one (), manyOrNone(), .none() are all pg-promise methodes to the amout of data being returned to the user
// .manyOrnone() is a pg-promise method.
Pokemon.findAll = () => {
  return db.manyOrNone('SELECT * FROM pokemon');
};

// we use $ to inject variables into our SQL query.
Pokemon.findById = (id) => {
  return db.one(
    // db.one takes 2 arguments. The first is a SQL query...
    'SELECT * FROM pokemon WHERE id=$1',
    // the second is an array of variables to be injected in query
    [id]
  );
};

Pokemon.create = (name, description, image, type) => {
  return db.one(
    // returning
    'INSERT INTO pokemon (name, description, image, type) VALUES ($1, $2, $3, $4) returning id',
    //  [$1 = name, $2 = description, $3 = image,  $4 = type]
    [name, description, image, type]
  );
};

Pokemon.update = (name, description, image, type, id) => {
  return db.one(
    'UPDATE pokemon SET name = $1, description = $2, image = $3, type = $4 WHERE id = $5 returning id',
    [name, description, image, type, id]
  );
};

Pokemon.delete = (id) => {
  return db.none(
    'DELETE FROM pokemon WHERE id = $1',
    [id]
  )
}

module.exports = Pokemon;