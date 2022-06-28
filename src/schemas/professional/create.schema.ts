import * as yup from "yup";
import { phoneRegex } from "../../validations";

const createProfessionalSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup
    .string()
    .matches(phoneRegex, "Phone number format is not valid. EX (xx) xxxxx-xxxx")
    .required(),
});

export { createProfessionalSchema };
