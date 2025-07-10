import { Sequelize } from "sequelize";
const sequelize = new Sequelize("sequelize", "root", "password@123", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("MYSQL Database connected successfully...!");
  })
  .catch((err) => {
    console.log("Database not connected");
  });

export default sequelize;
