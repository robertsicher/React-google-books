const db = require("../model");

module.exports = {
    findAll: function(req, res) {
      db.Books
        .find(req.query)
        .sort({ date: -1 })
        .then(dataBaseModel => res.json(dataBaseModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
      db.Books
        .findOne({id: req.params.id})
        .then(dataBaseModel => res.json(dataBaseModel))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
      db.Books
        .create(req.body)
        .then(dataBaseModel => res.json(dataBaseModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Books
        .findById({ _id: req.params.id })
        .then(dataBaseModel => dataBaseModel.remove())
        .then(dataBaseModel => res.json(dataBaseModel))
        .catch(err => res.status(422).json(err));
    }
  };