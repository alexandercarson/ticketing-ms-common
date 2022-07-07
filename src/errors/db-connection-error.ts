import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class DBConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error connecting to database";

  constructor() {
    super("Error connecting to database");
    // Because we are extending a built in class
    Object.setPrototypeOf(this, DBConnectionError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
