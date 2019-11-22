const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || 'postgres://ibrahimcisse@localhost:5432/pokemon2');

module.exports = db;