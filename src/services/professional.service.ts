import { Request } from "express";
import { professionalRepo } from "../repositories";
import { capitalize } from "../utils";
import {
  serializedArrProfessionalSchema,
  serializedObjProfessionalSchema,
} from "../schemas";

class ProfessionalService {
  insertProfessional = async ({ validated }: Request) => {
    validated = Object.assign(validated, {
      name: capitalize(validated.name),
      email: validated.email.toLowerCase(),
    });

    const professional = await professionalRepo.save(validated);

    return await serializedObjProfessionalSchema.validate(professional, {
      stripUnknown: true,
    });
  };

  getProfessionals = async () => {
    const professionals = await professionalRepo.findAll();
    return await serializedArrProfessionalSchema.validate(professionals, {
      stripUnknown: true,
    });
  };
}

export default new ProfessionalService();
