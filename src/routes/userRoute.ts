import express from "express";
import { createUser } from "../controller/userController";
import { upload } from "../middleware/upload";

const userRouter = express.Router();

// userRouter.route("/register").post(createUser);
userRouter.post("/register", upload.single("file"), createUser);
export default userRouter;
