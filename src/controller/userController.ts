import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";

const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    return res.json({ message: "User inserted successfully" });
  }
);

export { createUser };
