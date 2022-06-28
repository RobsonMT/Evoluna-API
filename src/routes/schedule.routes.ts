import { Router } from "express";
import { scheduleController } from "../controllers";
import { validadeSchema, validateScheduleData } from "../middlewares";
import { createScheduleSchema } from "../schemas";

const router = Router();

router.post(
  "/schedule",
  validadeSchema(createScheduleSchema),
  validateScheduleData,
  scheduleController.insertSchedule
);

router.get("/schedules", scheduleController.getSchedules);

export default router;
