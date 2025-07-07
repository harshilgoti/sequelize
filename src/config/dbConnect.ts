import { Sequelize } from "sequelize";
const sequelize = new Sequelize("sequelize", "root", "password@123", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  try {
    // await sequelize.sync({ alter: true });
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronized to the database:", error);
  }
};

export { dbConnection, sequelize };
