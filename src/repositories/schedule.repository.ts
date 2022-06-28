import { DeleteResult, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../data-source";
import { Schedule } from "../entities";

interface IScheduleRepository {
  save: (schedule: Partial<Schedule>) => Promise<Schedule>;
  findAll: () => Promise<Array<Schedule>>;
  findOne: (payload: object) => Promise<Schedule | null>;
  search: (name: string, day: string) => Promise<Array<Schedule>>;
  update: (id: string, payload: Partial<Schedule>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class ScheduleRepository implements IScheduleRepository {
  private ormRepo: Repository<Schedule>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Schedule);
  }

  save = async (schedule: Partial<Schedule>) => {
    const newSchedule = await this.ormRepo.save(schedule);
    return await this.ormRepo.findOne({
      where: { id: newSchedule.id },
      relations: ["formOfService", "time", "professional", "client"],
    });
  };

  findAll: () => Promise<Array<Schedule>> = async () => {
    return await this.ormRepo.find({
      relations: ["formOfService", "time", "professional", "client"],
    });
  };

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };

  search = async (name: string, day: string) => {
    return await this.ormRepo
      .createQueryBuilder("schedule")
      .innerJoinAndSelect("schedule.formOfService", "formOfService")
      .innerJoinAndSelect("schedule.professional", "professional")
      .innerJoinAndSelect("schedule.client", "client")
      .innerJoinAndSelect("schedule.time", "time")
      .where("professional.name = :name", { name })
      .andWhere("schedule.day = :day", { day })
      .orderBy("schedule.day", "ASC")
      .getMany();
  };

  update = async (id: string, payload: Partial<Schedule>) => {
    return await this.ormRepo.update(id, { ...payload });
  };

  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new ScheduleRepository();
