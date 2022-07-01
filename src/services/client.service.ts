import { Request } from "express";
import { ErrorHTTP } from "../errors";
import { clientRepo } from "../repositories";
import {
  capitalizeFirstLetter,
  capitalizeWords,
  formatData,
  formatDataToDbFormat,
} from "../utils";

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

    validated.question &&
      (validated.question = capitalizeFirstLetter(validated.question));
    validated.birthDate = formatDataToDbFormat(validated.birthDate);
    validated.fullName = capitalizeWords(validated.fullName);
    validated.email = validated.email.toLowerCase();

    console.log(validated.birthDate);

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
