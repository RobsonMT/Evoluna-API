import { DeleteResult, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../data-source";
import { Professional } from "../entities/Professional.entity";

interface IProfessionalRepository {
  save: (professional: Partial<Professional>) => Promise<Professional>;
  findAll: () => Promise<Array<Professional>>;
  findOne: (payload: object) => Promise<Professional | null>;
  update: (id: string, payload: Partial<Professional>) => Promise<UpdateResult>;
  delete: (uuid: string) => Promise<DeleteResult>;
}

class ProfessionalRepository implements IProfessionalRepository {
  private ormRepo: Repository<Professional>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Professional);
  }

  save = async (professional: Partial<Professional>) => {
    await this.ormRepo.save(professional);
    return await this.ormRepo.findOneBy({ email: professional.email });
  };

  findAll: () => Promise<Array<Professional>> = async () => {
    return await this.ormRepo.find();
  };

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Professional>) => {
    return await this.ormRepo.update(id, { ...payload });
  };

  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new ProfessionalRepository();
