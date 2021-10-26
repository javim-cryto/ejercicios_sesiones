const { DataTypes } = require('sequelize');

const UserModel = (sequelize) =>
  sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isUnique: true,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  });

module.exports = UserModel;
