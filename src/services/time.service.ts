import { timeRepo } from "../repositories";

class TimeService {
  getTimes = async () => {
    const times = await timeRepo.findAll();
    return times;
  };
}

export default new TimeService();
