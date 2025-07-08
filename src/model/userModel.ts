import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConnect";

const User = sequelize.define(
  "Users",
  {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    age: DataTypes.INTEGER,
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
