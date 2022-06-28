import { Request } from "express";
import { professionalRepo } from "../repositories";
import { capitalizeWords } from "../utils";
import { serializedArrProfessionalSchema } from "../schemas";

class ProfessionalService {
  insertProfessional = async ({ validated }: Request) => {
    validated = Object.assign(validated, {
      name: capitalizeWords(validated.name),
      email: validated.email.toLowerCase(),
    });

    return await professionalRepo.save(validated);
  };

  getProfessionals = async () => {
    const professionals = await professionalRepo.findAll();
    return await serializedArrProfessionalSchema.validate(professionals, {
      stripUnknown: true,
    });
  };
}

export default new ProfessionalService();
