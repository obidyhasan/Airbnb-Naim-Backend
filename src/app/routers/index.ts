import { Router } from "express";
import { ServiceRouters } from "../modules/service/service.route";

export const router = Router();

const moduleRouters = [
  {
    path: "/service",
    router: ServiceRouters,
  },
];

moduleRouters.forEach((route) => {
  router.use(route.path, route.router);
});
