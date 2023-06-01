const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const routes = require('./api')
const morgan = require('morgan');
const bodyParser = require('body-parser');

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes)

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

module.exports = app;
