import { Request, Response } from "express";
import { formOfServiceService } from "../services";

class FormOfServiceController {
  getFormsOfService = async (req: Request, res: Response) => {
    const formsOfService = await formOfServiceService.getFormsOfService();
    return res.status(200).json(formsOfService);
  };
}

export default new FormOfServiceController();
