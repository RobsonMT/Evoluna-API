import * as yup from "yup";
import { birthDateRegex } from "../../validations";

const createScheduleSchema = yup.object().shape({
  day: yup
    .string()
    .matches(birthDateRegex, "Day format is not valid. EX: 12/12/2012")
    .required(),
  formOfServiceId: yup.string().uuid().required(),
  timeId: yup.string().uuid().required(),
  professionalId: yup.string().uuid().required(),
  clientId: yup.string().uuid().required(),
});

export { createScheduleSchema };
