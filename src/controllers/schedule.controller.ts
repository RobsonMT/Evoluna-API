import { Request, Response } from "express";
import { mailerService, scheduleService } from "../services";

class ScheduleController {
  insertSchedule = async (req: Request, res: Response) => {
    const schedule = await scheduleService.insertSchedule(req);
    return mailerService.confirmAppointment(res, schedule as any);
  };

  getSchedules = async (_: Request, res: Response) => {
    const schedules = await scheduleService.getSchedules();
    return res.status(200).json(schedules);
  };
}

export default new ScheduleController();
