import { Request } from "express";
import { ErrorHTTP } from "../errors";
import { clientRepo } from "../repositories";
import {
  serializedArrClientSchema,
  serializedObjClientSchema,
} from "../schemas";
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

    const client = await clientRepo.save(validated);
    client.birthDate = formatData(client.birthDate);

    return serializedObjClientSchema.validate(client, {
      stripUnknown: true,
    });
  };

  getClients = async () => {
    const clients = await clientRepo.findAll();

    for (let client of clients) {
      client.birthDate = formatData(client.birthDate);
    }

    return await serializedArrClientSchema.validate(clients, {
      stripUnknown: true,
    });
  };
}

export default new ClientService();
