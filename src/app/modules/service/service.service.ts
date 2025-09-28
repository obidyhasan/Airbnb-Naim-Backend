import { Service } from "./service.model";

const getAllServices = async () => {
  const services = await Service.find();

  return {
    data: services,
  };
};

const getSingleService = async (id: number) => {
  const result = await Service.aggregate([
    {
      $match: {
        "services.serviceId": id,
      },
    },
    {
      $unwind: "$services",
    },
    {
      $match: {
        "services.serviceId": id,
      },
    },
    {
      $replaceRoot: {
        newRoot: "$services",
      },
    },
  ]);
  const service = result[0];
  return {
    data: service,
  };
};

export const ServiceService = {
  getAllServices,
  getSingleService,
};
