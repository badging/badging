const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/sequelize");

const Event = sequelize.define("events", {
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  event_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  event_URL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  badge: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  reviewers: {
    type: DataTypes.JSON,
    allowNull: false,
    validate: {
      isValidReviewers(value) {
        if (!Array.isArray(value)) {
          throw new Error("Reviewers must be an array.");
        }
        for (const reviewer of value) {
          if (typeof reviewer.name !== "string" || reviewer.name.length > 255) {
            throw new Error(
              "Reviewer name must be a string with max length 255."
            );
          }
          if (!isValidURL(reviewer.github_profile_link)) {
            throw new Error("Invalid GitHub profile link format.");
          }
        }
      },
    },
  },
  application: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

// Helper function to validate URL format
function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = Event;
