import { Router } from "express";
import { ServiceController } from "./service.controller";

const router = Router();

router.get("/", ServiceController.getAllServices);
router.get("/:id", ServiceController.getSingleService);

export const ServiceRouters = router;
