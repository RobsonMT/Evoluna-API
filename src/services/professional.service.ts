import { Request } from "express";
import { serializedObjProfessionalSchema } from "../schemas";
import { professionalRepo } from "../repositories";
import { capitalize } from "../utils";

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
}

export default new ProfessionalService();
