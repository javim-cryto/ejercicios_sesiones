const { Sequelize } = require('sequelize');

// Importing modules
const UserModel = require('./models/User');

// Database connection
const sequelize = new Sequelize('database', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

// Adding models
const models = [UserModel];

// Registering models to Sequelize
for (let model of models) {
  model(sequelize);
}

module.exports = sequelize;
