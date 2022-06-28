import * as yup from "yup";
import { reduceShape } from "../../utils";

const professionalShape = {
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup.string().required(),
};

const serializedObjProfessionalSchema = yup
  .object()
  .shape(reduceShape(professionalShape));

const serializedArrProfessionalSchema = yup
  .array()
  .of(yup.object().shape(reduceShape(professionalShape)));

export { serializedObjProfessionalSchema, serializedArrProfessionalSchema };
