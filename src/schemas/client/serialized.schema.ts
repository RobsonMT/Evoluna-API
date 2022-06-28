import * as yup from "yup";
import { reduceShape } from "../../utils";

const clientShape = {
  id: yup.string().required(),
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup.string().required(),
  cpf: yup.string().required(),
  birthDate: yup.string().required(),
  timeOfBirth: yup.string().required(),
  question: yup.string().required(),
  birthCity: yup.string().required(),
  lastBirthdayCity: yup.string().required(),
};

const serializedObjClientSchema = yup.object().shape(reduceShape(clientShape));

const serializedArrClientSchema = yup
  .array()
  .of(yup.object().shape(reduceShape(clientShape)));

export { serializedObjClientSchema, serializedArrClientSchema };
