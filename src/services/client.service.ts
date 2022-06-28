import { Request } from "express";
import { clientRepo } from "../repositories";
import { capitalizeFirstLetter, capitalizeWords } from "../utils";
import ErrorHTTP from "../errors/ErrorHTTP";

class ClientService {
  insertClient = async ({ validated }: Request) => {
    const clientCpfAlreadyExist = await clientRepo.findOne({
      cpf: validated.cpf,
    });

    if (clientCpfAlreadyExist) {
      throw new ErrorHTTP(
        409,
        `Key (cpf)=(${validated.email}) already registered.`
      );
    }

    validated = Object.assign(validated, {
      fullName: capitalizeWords(validated.fullName),
      email: validated.email.toLowerCase(),
      question: capitalizeFirstLetter(validated.question),
    });

    const client = await clientRepo.save(validated);

    return Object.assign(client, {
      birthDate: client.birthDate.toString().split("-").reverse().join("/"),
    });
  };
}

export default new ClientService();
