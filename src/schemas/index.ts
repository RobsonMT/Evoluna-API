import {
  createProfessionalSchema,
  serializedObjProfessionalSchema,
  serializedArrProfessionalSchema,
} from "./professional";
import {
  createClientSchema,
  serializedObjClientSchema,
  serializedArrClientSchema,
} from "./client";

import { createScheduleSchema } from "./schedule";

export {
  // PROFESSIONAL
  createProfessionalSchema,
  serializedArrProfessionalSchema,
  serializedObjProfessionalSchema,
  // CLIENT
  createClientSchema,
  serializedObjClientSchema,
  serializedArrClientSchema,
  // SCHEDULE
  createScheduleSchema,
};
