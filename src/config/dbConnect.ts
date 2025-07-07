import { Sequelize } from "sequelize";

const dbConnection = async () => {
  const sequelize = new Sequelize("sequelize", "root", "password@123", {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { dbConnection };
