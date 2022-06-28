import { Request, Response } from "express";
import { professionalService } from "../services";

class ProfessionalController {
  insertProfessional = async (req: Request, res: Response) => {
    const professional = await professionalService.insertProfessional(req);
    return res.status(201).json(professional);
  };

  getProfessionals = async (req: Request, res: Response) => {
    const professionals = await professionalService.getProfessionals();
    return res.status(200).json(professionals);
  };
}

export default new ProfessionalController();
