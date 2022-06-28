import { Router } from "express";
import { formOfServiceController } from "../controllers";

const router = Router();

router.get("/formOfServices", formOfServiceController.getFormsOfService);

export default router;
