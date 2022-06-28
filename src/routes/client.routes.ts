import { Router } from "express";
import { clientController } from "../controllers";
import { validadeSchema, verifyEmailAndContactExist } from "../middlewares";
import { createClientSchema } from "../schemas";

const router = Router();

router.post(
  "/client",
  validadeSchema(createClientSchema),
  verifyEmailAndContactExist,
  clientController.insertClient
);

router.get("/clients", clientController.getClients);

export default router;
