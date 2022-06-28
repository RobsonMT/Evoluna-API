import { DeleteResult, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../data-source";
import { Client } from "../entities";

interface IClientRepository {
  save: (client: Partial<Client>) => Promise<Client>;
  findAll: () => Promise<Array<Client>>;
  findOne: (payload: object) => Promise<Client | null>;
  update: (id: string, payload: Partial<Client>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class ClientRepository implements IClientRepository {
  private ormRepo: Repository<Client>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Client);
  }

  save = async (client: Partial<Client>) => {
    await this.ormRepo.save(client);
    return await this.ormRepo.findOneBy({ email: client.email });
  };

  findAll: () => Promise<Array<Client>> = async () => {
    return await this.ormRepo.find();
  };

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Client>) => {
    return await this.ormRepo.update(id, { ...payload });
  };

  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new ClientRepository();
