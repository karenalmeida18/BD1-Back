const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/user');
const Animals = require('../models/animals');

const connection = new Sequelize(dbConfig);

User.init(connection);
Animals.init(connection);

module.exports = connection;