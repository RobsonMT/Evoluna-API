import "express-async-errors";
import express, { Request, Response } from "express";
import { errorHandling } from "./middlewares";
import registerRouters from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

registerRouters(app);

app.use(errorHandling);

app.get("/api/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});

export default app;
