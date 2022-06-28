import { Express } from "express";
import professionalRouter from "./professional.routes";
import timeRouter from "./time.routes";

const registerRouters = (app: Express): void => {
  app.use("/api", professionalRouter);
  app.use("/api", timeRouter);
};

export default registerRouters;
