import { NextFunction, Request, Response } from "express";
import { ServiceService } from "./service.service";
import { sendResponse } from "../../utils/sendResponse";

const getAllServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await ServiceService.getAllServices();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Get Services Successfully",
    data: result,
  });
};

export const ServiceController = {
  getAllServices,
};
