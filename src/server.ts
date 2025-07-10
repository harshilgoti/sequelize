import express from "express";
import userRouter from "./routes/userRoute";
import modelsAllRelations from "./model/index";
// import { dbConnection } from "./config/dbConnect";
// import { User } from "./model/userModel";
// dbConnection();

const app = express();
app.use(express.json());

app.use("/", userRouter);

// User.sync({ alter: true });

modelsAllRelations.sequelize
  .sync({ alter: false })
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is running in port :-${3000}`);
    });
  })
  .catch((err: any) => console.log(err));

// app.listen(3000, () => {
//   console.log("Server is running up");
// });
