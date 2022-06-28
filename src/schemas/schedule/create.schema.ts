import * as yup from "yup";
import { birthDateRegex } from "../../validations";

const createScheduleSchema = yup.object().shape({
  day: yup
    .string()
    .matches(birthDateRegex, "BirthDate format is not valid. 12/12/2012")
    .required(),
  formOfServiceId: yup.string().uuid().required(),
  timeId: yup.string().uuid().required(),
  professionalId: yup.string().uuid().required(),
  clientId: yup.string().uuid().required(),
});

export { createScheduleSchema };
