import { Request, Response, NextFunction } from "express";
import { ErrorHTTP } from "../errors";

const errorHandling = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof ErrorHTTP) {
    return res.status(error.statusCode).json({
      error: error.message,
    });
  }

  return res.status(500).send({ error: "Internal server error!" });
};

export default errorHandling;
