import { Request } from "express";
import ErrorHTTP from "../errors/ErrorHTTP";
import {
  clientRepo,
  formOfServiceRepo,
  professionalRepo,
  scheduleRepo,
  timeRepo,
} from "../repositories";
import { serializedObjScheduleSchema } from "../schemas/schedule/serialized.schema";
import { formatData } from "../utils";

class ScheduleService {
  insertSchedule = async ({ validated }: Request) => {
    try {
      const formOfService = await formOfServiceRepo.findOne({
        id: validated.formOfServiceId,
      });

      if (!formOfService) {
        throw new Error();
      }
    } catch (err: any) {
      throw new ErrorHTTP(404, "formOfService not found");
    }

    try {
      const time = await timeRepo.findOne({
        id: validated.timeId,
      });

      if (!time) {
        throw new Error();
      }
    } catch (err: any) {
      throw new ErrorHTTP(404, "Time not found");
    }

    try {
      const professional = await professionalRepo.findOne({
        id: validated.professionalId,
      });

      if (!professional) {
        throw new Error();
      }
    } catch (err: any) {
      throw new ErrorHTTP(404, "Professional not found");
    }

    try {
      const client = await clientRepo.findOne({
        id: validated.clientId,
      });

      if (!client) {
        throw new Error();
      }
    } catch (err: any) {
      throw new ErrorHTTP(404, "Client not found");
    }

    validated = Object.assign(validated, {
      formOfService: validated.formOfServiceId,
      time: validated.timeId,
      professional: validated.professionalId,
      client: validated.clientId,
    });

    delete validated.formOfServiceId;
    delete validated.timeId;
    delete validated.professionalId;
    delete validated.clientId;

    const schedule = await scheduleRepo.save(validated);

    return await serializedObjScheduleSchema.validate(
      Object.assign(schedule, {
        day: formatData(schedule.day),
      }),
      { stripUnknown: true }
    );
  };
}

export default new ScheduleService();
