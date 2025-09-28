import { model, Schema } from "mongoose";
import { IService, IServiceCard } from "./service.interface";

const serviceCardSchema = new Schema<IServiceCard>(
  {
    serviceId: { type: Number },
    name: { type: String },
    price: { type: String },
    rate: { type: String },
    isGuestFavorite: { type: Boolean },
    images: { type: [String] },
  },
  {
    versionKey: false,
    _id: false,
  }
);

const serviceSchema = new Schema<IService>(
  {
    id: { type: Number },
    title: { type: String },
    services: [serviceCardSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Service = model<IService>("Service", serviceSchema);
