import { formOfServiceRepo } from "../repositories";

class FormOfServiceService {
  getFormsOfService = async () => {
    return await formOfServiceRepo.findAll();
  };
}

export default new FormOfServiceService();
