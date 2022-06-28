import { Request } from "express";
import { clientRepo } from "../repositories";
import { capitalizeFirstLetter, capitalizeWords, formatData } from "../utils";
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
      birthDate: formatData(client.birthDate),
    });
  };

  getClients = async () => {
    const clientsData = await clientRepo.findAll();

    const clients = [];

    for (let client of clientsData) {
      clients.push(
        Object.assign(client, {
          birthDate: formatData(client.birthDate) as string,
        })
      );
    }

    return clients;
  };
}

export default new ClientService();
