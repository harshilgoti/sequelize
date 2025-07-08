import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../model/userModel";
import { Op } from "sequelize";

const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create(
      {
        name: "Harshil",
        email: "h5@gmail.com",
      },
      {
        isNewRecord: true,
      }
    );

    const newUser = await User.findOne({
      where: {
        id: {
          [Op.eq]: user.toJSON().id,
        },
      },
    });
    return res.json({ data: newUser, message: "User inserted successfully" });
  }
);

export { createUser };
