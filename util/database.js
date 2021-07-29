const {Sequelize} = require('sequelize');

const db = new Sequelize('Demo', 'postgres', '959296', {
    host: 'localhost',
    dialect: 'postgres',

});

module.exports = db;

