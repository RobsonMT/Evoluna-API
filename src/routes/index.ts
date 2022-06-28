import { Express } from "express";
import professionalRouter from "./professional.routes";
import formOfServiceRouter from "./formOfService.routes";
import clientRouter from "./client.routes";
import timeRouter from "./time.routes";
import scheduleRouter from "./schedule.routes";

const registerRouters = (app: Express): void => {
  app.use("/api", professionalRouter);
  app.use("/api", formOfServiceRouter);
  app.use("/api", scheduleRouter);
  app.use("/api", clientRouter);
  app.use("/api", timeRouter);
};

export default registerRouters;
