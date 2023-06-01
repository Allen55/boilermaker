const db = require('./database');
const { Sequelize } = require('sequelize');
const Animal = require('./models/animal.js');

const seedData = async() => {
    await Promise.all([
        Animal.upsert({ 
            name: 'Frog', 
            origin: 'Madagascar', 
            description: 'protruding eyes, no tail, and strong, webbed hind feet that are adapted for leaping and swimming.', 
        }),
        Animal.upsert({ 
            name: 'Slot', 
            origin: 'Central America', 
            description: 'Sluggish tree dwellers', 
        }), 
    ])
}



module.exports = {
    db,
    Animal
}