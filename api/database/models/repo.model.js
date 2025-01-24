// models/Repo.js
const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");
const User = require("./user.model");

const Repo = sequelize.define("repos", {
  githubRepoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gitlabRepoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  DEICommitSHA: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  repoLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  badgeType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  attachment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
});

// Define associations (foreign key)
Repo.belongsTo(User, { foreignKey: "userId" });

module.exports = Repo;
