import { Service } from "./service.model";

const getAllServices = async () => {
  const services = await Service.find();

  return {
    data: services,
  };
};

export const ServiceService = {
  getAllServices,
};
