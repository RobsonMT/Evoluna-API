import * as yup from "yup";
import {
  birthDateRegex,
  cpfRegex,
  phoneRegex,
  timeAMPMRegex,
} from "../../validations";

const createClientSchema = yup.object().shape({
  fullName: yup
    .string()
    .required()
    .max(50, "Must have a maximum of 50 characters"),
  email: yup.string().email().required(),
  contact: yup
    .string()
    .matches(phoneRegex, "Phone number format is not valid. EX (99) 99999-9999")
    .required(),
  cpf: yup
    .string()
    .matches(cpfRegex, "Cpf number format is not valid. EX 000.000.000-00")
    .required(),
  birthDate: yup
    .string()
    .matches(birthDateRegex, "BirthDate format is not valid. 12/12/2012")
    .required(),
  timeOfBirth: yup
    .string()
    .matches(timeAMPMRegex, "BirthDate format is not valid. 12/12/2012")
    .required(),
  question: yup.string().required(),
  birthCity: yup.string().required(),
  lastBirthdayCity: yup.string().required(),
});

export { createClientSchema };
