import * as yup from "yup";
import { reduceShape } from "../../utils";

const scheduleShape = {
  id: yup.string().required(),
  day: yup.string().required(),
  formOfService: yup.object().shape({
    name: yup.string().required(),
    id: yup.string().required(),
  }),
  time: yup.object().shape({
    name: yup.string().required(),
    id: yup.string().required(),
  }),
  professional: yup.object().shape({
    contact: yup.string().required(),
    email: yup.string().required(),
    name: yup.string().required(),
    id: yup.string().required(),
  }),
  client: yup.object().shape({
    contact: yup.string().required(),
    email: yup.string().required(),
    fullName: yup.string().required(),
    id: yup.string().required(),
  }),
};

const serializedObjScheduleSchema = yup
  .object()
  .shape(reduceShape(scheduleShape));

const serializedArrScheduleSchema = yup
  .array()
  .of(yup.object().shape(reduceShape(scheduleShape)));

export { serializedObjScheduleSchema, serializedArrScheduleSchema };
