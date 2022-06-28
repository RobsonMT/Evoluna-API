import { Request, Response } from "express";
import { professionalService } from "../services";

class ProfessionalController {
  insertProfessional = async (req: Request, res: Response) => {
    const user = await professionalService.insertProfessional(req);
    return res.status(201).json(user);
  };
}

export default new ProfessionalController();
