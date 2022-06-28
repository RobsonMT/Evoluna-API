import { Request, Response } from "express";
import { scheduleService } from "../services";

class ScheduleController {
  insertSchedule = async (req: Request, res: Response) => {
    const schedule = await scheduleService.insertSchedule(req);
    return res.status(201).json(schedule);
  };

  getSchedules = async (req: Request, res: Response) => {
    const schedules = await scheduleService.getSchedules();
    return res.status(200).json(schedules);
  };
}

export default new ScheduleController();
