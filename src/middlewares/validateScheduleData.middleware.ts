import { Request, Response, NextFunction } from "express";
import { ErrorHTTP } from "../errors";
import {
  clientRepo,
  formOfServiceRepo,
  professionalRepo,
  timeRepo,
} from "../repositories";

const validateScheduleData = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  try {
    const formOfService = await formOfServiceRepo.findOne({
      id: req.validated.formOfServiceId,
    });

    if (!formOfService) {
      throw new Error();
    }
  } catch (err: any) {
    throw new ErrorHTTP(404, "formOfService not found");
  }

  try {
    const time = await timeRepo.findOne({
      id: req.validated.timeId,
    });

    if (!time) {
      throw new Error();
    }
  } catch (err: any) {
    throw new ErrorHTTP(404, "Time not found");
  }

  try {
    const professional = await professionalRepo.findOne({
      id: req.validated.professionalId,
    });

    if (!professional) {
      throw new Error();
    }

    req.professional = professional;
  } catch (err: any) {
    throw new ErrorHTTP(404, "Professional not found");
  }

  try {
    const client = await clientRepo.findOne({
      id: req.validated.clientId,
    });

    if (!client) {
      throw new Error();
    }
  } catch (err: any) {
    throw new ErrorHTTP(404, "Client not found");
  }

  return next();
};

export default validateScheduleData;
