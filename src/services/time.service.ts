import { Request } from "express";
import { ErrorHTTP } from "../errors";
import { scheduleRepo, timeRepo } from "../repositories";
import { capitalizeWords, formatDataToDbFormat } from "../utils";

class TimeService {
  getTimes = async () => {
    return await timeRepo.findAll();
  };

  search = async ({ query }: Request) => {
    const prof = capitalizeWords(query.prof as string);
    const day = formatDataToDbFormat(query.day as string);

    if (!prof || !day) {
      throw new ErrorHTTP(404, "Missing query params");
    }

    const times = await timeRepo.findAll();

    const searchedSchedules = await scheduleRepo.search(prof, day);

    const filteredTimes = times.filter(
      (time) =>
        searchedSchedules.filter((schedule) => schedule.time.id === time.id)
          .length === 0
    );

    return filteredTimes;
  };
}

export default new TimeService();
