import { DeleteResult, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../data-source";
import { Schedule } from "../entities";

interface IScheduleRepository {
  save: (schedule: Partial<Schedule>) => Promise<Schedule>;
  findAll: () => Promise<Array<Schedule>>;
  findOne: (payload: object) => Promise<Schedule | null>;
  update: (id: string, payload: Partial<Schedule>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class ScheduleRepository implements IScheduleRepository {
  private ormRepo: Repository<Schedule>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Schedule);
  }

  save = async (schedule: Partial<Schedule>) => {
    await this.ormRepo.save(schedule);
    return await this.ormRepo.findOneBy({ day: schedule.day });
  };

  findAll: () => Promise<Array<Schedule>> = async () => {
    return await this.ormRepo.find();
  };

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Schedule>) => {
    return await this.ormRepo.update(id, { ...payload });
  };

  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new ScheduleRepository();
