import { Router } from "express";
import { timeController } from "../controllers";

const router = Router();

router.get("/times", timeController.getTimes);

router.get("/times/search", timeController.search);

export default router;
