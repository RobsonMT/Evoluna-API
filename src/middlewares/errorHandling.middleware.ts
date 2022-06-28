import { Request, Response, NextFunction } from "express";
import { ErrorHTTP } from "../errors";


const errorHandling = (
  error: any,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (error instanceof ErrorHTTP) {
    return res.status(error.statusCode).json({
      error: error.message,
    });
  }

  console.log(error);

  return res.status(500).send({ error: "Internal server error!" });
};

export default errorHandling;
