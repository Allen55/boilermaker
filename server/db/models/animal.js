const Sequelize = require('sequelize');
const db = require('../database')

const Animal = db.define('Animal', {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  orgin: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  }
});

module.exports = Animal;