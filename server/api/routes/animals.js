const express = require('express');
const router = express.Router();
const { Animal } = require('../../db');

router.get('/', async (req, res, next) => {
    try {
      const animals = await Animal.findAll();
      res.send(animals);
    } catch (err) {
      res.send('animals not loading 500')
      //next(err);
    }
});

// matches POST requests to /api/puppies/
router.post('/', function (req, res, next) { /* etc */});

// matches PUT requests to /api/puppies/:id
router.put('/:id', function (req, res, next) { /* etc */});

// matches DELETE requests to /api/puppies/:id
router.delete('/:id', function (req, res, next) { /* etc */});
  

module.exports = router;