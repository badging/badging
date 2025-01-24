const sequelize = require("./sequelize");

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    try {
      if (process.env.NODE_ENV === "development") {
        await sequelize.sync({ force: true });
      } else {
        await sequelize.sync();
      }
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
  }
};

module.exports = dbConnect;
