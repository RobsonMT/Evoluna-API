import { Router } from "express";
import scheduleController from "../controllers/schedule.controller";
import { validadeSchema } from "../middlewares";
import { createScheduleSchema } from "../schemas";

const router = Router();

router.post(
  "/schedule",
  validadeSchema(createScheduleSchema),
  scheduleController.insertSchedule
);

export default router;
