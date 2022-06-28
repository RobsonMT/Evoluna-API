import { Request, Response } from "express";
import { scheduleService } from "../services";

class ScheduleController {
  insertSchedule = async (req: Request, res: Response) => {
    const schedule = await scheduleService.insertSchedule(req);
    return res.status(201).json(schedule);
  };
}

export default new ScheduleController();
