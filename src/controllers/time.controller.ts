import { Request, Response } from "express";
import { timeService } from "../services";

class TimeController {
  getTimes = async (req: Request, res: Response) => {
    const times = await timeService.getTimes();
    return res.status(200).json(times);
  };
}

export default new TimeController();
