import dbConnection from "../config/dbConnect";
import { User } from "./userModel";

const db = {} as any;
db.sequelize = dbConnection;
db.User = User;

export default db;
