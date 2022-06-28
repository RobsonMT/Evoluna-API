import { formOfServiceRepo } from "../repositories";

class FormOfServiceService {
  getFormsOfService = async () => {
    const formsOfService = await formOfServiceRepo.findAll();
    return formsOfService;
  };
}

export default new FormOfServiceService();
