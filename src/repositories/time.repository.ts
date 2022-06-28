import { DeleteResult, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../data-source";
import { Time } from "../entities";

interface ITimeRepository {
  save: (time: Partial<Time>) => Promise<Time>;
  findAll: () => Promise<Array<Time>>;
  findOne: (payload: object) => Promise<Time | null>;
  update: (id: string, payload: Partial<Time>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class TimeRepository implements ITimeRepository {
  private ormRepo: Repository<Time>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Time);
  }

  save = async (time: Partial<Time>) => {
    return await this.ormRepo.save(time);
  };

  findAll: () => Promise<Array<Time>> = async () => {
    return await this.ormRepo.find();
  };

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Time>) => {
    return await this.ormRepo.update(id, { ...payload });
  };

  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new TimeRepository();
