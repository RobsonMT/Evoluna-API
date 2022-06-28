import { Router } from "express";
import { timeController } from "../controllers";

const router = Router();

router.get("/times", timeController.getTimes);

export default router;
