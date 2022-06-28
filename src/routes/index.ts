import { Express } from "express";
import professionalRouter from "./professional.routes";

const registerRouters = (app: Express): void => {
  app.use("/api", professionalRouter);
};

export default registerRouters;
