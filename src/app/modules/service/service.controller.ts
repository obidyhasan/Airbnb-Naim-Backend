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
const getSingleService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await ServiceService.getSingleService(Number(req.params.id));

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Get Single Service Successfully",
    data: result,
  });
};

export const ServiceController = {
  getAllServices,
  getSingleService,
};
