import * as yup from "yup";
import { birthDateRegex } from "../../validations";

const createScheduleSchema = yup.object().shape({
  day: yup
    .string()
    .matches(birthDateRegex, "BirthDate format is not valid. 12/12/2012")
    .required(),
  formOfServiceId: yup.string().required(),
  timeId: yup.string().required(),
  professionalId: yup.string().required(),
  clientId: yup.string().required(),
});

export { createScheduleSchema };
