import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../model/userModel";
import { Op } from "sequelize";
import path from "path";
const xlsx = require("xlsx");

const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("🚀 ~ req:", req.body);
    // const user = await User.create(
    //   {
    //     ...req.body,
    //   },
    //   {
    //     isNewRecord: true,
    //     // fields: ["id"],
    //   }
    // );

    // const newUser = await User.findOne({
    //   where: {
    //     id: {
    //       [Op.eq]: user.toJSON().id,
    //     },
    //   },
    // });

    // const filePath = path.join(__dirname, "../../", req.file.path);

    const workbook = xlsx.readFile(req.file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const data = xlsx.utils.sheet_to_json(sheet, {
      raw: false,
      dateNF: "yyyy-mm-dd",
    });

    console.log("Parsed Excel data:", data);

    // Optional: Save users to DB
    // await User.bulkCreate(data);

    return res.json({ data, message: "File processed successfully" });
  }
);

export { createUser };
