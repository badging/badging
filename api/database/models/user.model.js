const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const User = sequelize.define("users", {
  login: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  githubId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gitlabId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = User;
