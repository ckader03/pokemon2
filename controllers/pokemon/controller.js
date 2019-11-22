// this file will communicate between the user request and any databvase action 
// controllers/pokemon/controller.js

const Pokemon = require('../../models/pokemon');

const controller = {};

controller.index = (req, res) => {
    // pokemon.findAll() is a sql query
  Pokemon
    .findAll()
    .then((data) => {
      res.render('pokemon/index', {pokemon: data});
    })
    .catch(err => console.log('ERROR:', err));
};

controller.show = (req, res) => {
  const id = req.params.id;
  Pokemon
    .findById(id)
    .then((data) => {
      res.render('pokemon/show',data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.new = (req, res) => {
  res.render('pokemon/new');
};

controller.update = (req, res) => {
  const id = req.params.id;
  Pokemon
    .findById(id)
    .then(data => {
      res.render('pokemon/update', data);
    })
};

module.exports = controller;