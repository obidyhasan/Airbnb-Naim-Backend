import express, { Request, Response } from "express";
import cors from "cors";
import { envVars } from "./app/config/env";
import { router } from "./app/routers";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/noFound";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: envVars.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Airbnb Backend",
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
