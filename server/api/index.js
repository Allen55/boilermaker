const express = require('express');
const router = express.Router();
const animalRouter = require('./routes/animals.js');

router.use('/animals', animalRouter);

router.get('/', (req, res, next) => {
    res.send('at /api')
})

module.exports = router;