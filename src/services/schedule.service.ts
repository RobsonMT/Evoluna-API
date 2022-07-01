import { Request } from "express";
import { formatData, formatDataToDbFormat } from "../utils";
import { ErrorHTTP } from "../errors";
import { scheduleRepo, timeRepo } from "../repositories";
import {
  serializedArrScheduleSchema,
  serializedObjScheduleSchema,
} from "../schemas/schedule/serialized.schema";

class ScheduleService {
  insertSchedule = async ({ validated, professional }: Request) => {
    const times = await timeRepo.findAll();
    const searchedSchedules = await scheduleRepo.search(
      professional.id,
      validated.day
    );

    const filteredTimes = times.filter(
      (time) =>
        searchedSchedules.filter((schedule) => schedule.time.id === time.id)
          .length === 0
    );

    if (!filteredTimes.some((e) => e.id === validated.timeId)) {
      throw new ErrorHTTP(409, "Time not available");
    }

    validated.day = formatDataToDbFormat(validated.day);
    validated.formOfService = validated.formOfServiceId;
    validated.professional = validated.professionalId;
    validated.client = validated.clientId;
    validated.time = validated.timeId;

    delete validated.formOfServiceId;
    delete validated.timeId;
    delete validated.professionalId;
    delete validated.clientId;

    const schedule = await scheduleRepo.save(validated);
    schedule.day = formatData(schedule.day);

    return await serializedObjScheduleSchema.validate(schedule, {
      stripUnknown: true,
    });
  };

  getSchedules = async () => {
    const schedules = await scheduleRepo.findAll();

    for (let schedule of schedules) {
      schedule.day = formatData(schedule.day);
    }

    return await serializedArrScheduleSchema.validate(schedules, {
      stripUnknown: true,
    });
  };
}

export default new ScheduleService();
