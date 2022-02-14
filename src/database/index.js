const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/user');
const Animals = require('../models/animals');
const Messages = require('../models/messages');
const Answer = require('../models/answer');

const connection = new Sequelize(dbConfig);

User.init(connection);
Animals.init(connection);
Messages.init(connection);
Answer.init(connection);

Animals.associate(connection.models);
Messages.associate(connection.models);
Answer.associate(connection.models);

module.exports = connection;