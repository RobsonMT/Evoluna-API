import { Router } from "express";
import { formOfServiceController } from "../controllers";

const router = Router();

router.get("/formsOfService", formOfServiceController.getFormsOfService);

export default router;
