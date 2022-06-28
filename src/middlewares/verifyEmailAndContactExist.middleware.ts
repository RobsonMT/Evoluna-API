import { Request, Response, NextFunction } from "express";
import { ErrorHTTP } from "../errors";

import { clientRepo, professionalRepo } from "../repositories";

const verifyEmailAndContactExist = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const clientEmailAlreadyExist = await clientRepo.findOne({
    email: req.validated.email.toLowerCase(),
  });

  const professionalEmailAlreadyExist = await professionalRepo.findOne({
    email: req.validated.email.toLowerCase(),
  });

  if (clientEmailAlreadyExist || professionalEmailAlreadyExist) {
    throw new ErrorHTTP(
      409,
      `Key (email)=(${req.validated.email}) already registered.`
    );
  }

  const clientContactAlreadyExist = await clientRepo.findOne({
    contact: req.validated.contact,
  });

  const professionalContactAlreadyExist = await professionalRepo.findOne({
    contact: req.validated.contact,
  });

  if (clientContactAlreadyExist || professionalContactAlreadyExist) {
    throw new ErrorHTTP(
      409,
      `Key (contact)=(${req.validated.contact}) already registered.`
    );
  }

  return next();
};

export default verifyEmailAndContactExist;
