import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors(),
    });
  }
  //If we dont understand the error handle it here in the same structure as the others
  res
    .status(400)
    .send({
      errors: [{ message: "Sorry, Something went wrong", error: err.message }],
    });
};
