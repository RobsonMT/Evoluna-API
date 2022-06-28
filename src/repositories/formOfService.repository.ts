import { DeleteResult, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../data-source";
import { FormOfService } from "../entities";

interface IFormOfServiceRepository {
  save: (formOfservice: Partial<FormOfService>) => Promise<FormOfService>;
  findAll: () => Promise<Array<FormOfService>>;
  findOne: (payload: object) => Promise<FormOfService | null>;
  update: (
    id: string,
    payload: Partial<FormOfService>
  ) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class FormOfServiceRepository implements IFormOfServiceRepository {
  private ormRepo: Repository<FormOfService>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(FormOfService);
  }

  save = async (formOfservice: Partial<FormOfService>) => {
    await this.ormRepo.save(formOfservice);
    return await this.ormRepo.findOneBy({ name: formOfservice.name });
  };

  findAll: () => Promise<Array<FormOfService>> = async () => {
    return await this.ormRepo.find();
  };

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<FormOfService>) => {
    return await this.ormRepo.update(id, { ...payload });
  };

  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new FormOfServiceRepository();
