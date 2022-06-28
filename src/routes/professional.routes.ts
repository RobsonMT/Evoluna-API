import { Router } from "express";
import { professionalController } from "../controllers";
import { validadeSchema, verifyEmailAndContactExist } from "../middlewares";
import { createProfessionalSchema } from "../schemas";

const router = Router();

router.post(
  "/professional",
  validadeSchema(createProfessionalSchema),
  verifyEmailAndContactExist,
  professionalController.insertProfessional
);

router.get("/professionals", professionalController.getProfessionals);

export default router;
