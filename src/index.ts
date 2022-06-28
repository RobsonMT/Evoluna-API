import "express-async-errors";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});

export default app;
