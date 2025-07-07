import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnect";

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    tableName: "users",
    // freezeTableName: true,
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

export { User };
