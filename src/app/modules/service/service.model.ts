import { model, Schema } from "mongoose";
import { IService, IServiceCard, IAuthor } from "./service.interface";

const authorSchema = new Schema<IAuthor>(
  {
    address: { type: String, required: true },
    name: { type: String, required: true },
    rating: { type: String, required: true },
    reviews: { type: Number, required: true },
    yearofservices: { type: String, required: true },
  },
  {
    versionKey: false,
    _id: false,
  }
);

const serviceCardSchema = new Schema<IServiceCard>(
  {
    serviceId: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    rate: { type: String, required: true },
    isGuestFavorite: { type: Boolean, required: true },
    images: { type: [String], required: true },
    author: { type: authorSchema, required: true },
    city: { type: String, required: true },
    endDate: { type: String, required: true },
    guestAvailable: { type: Boolean, required: true },
    startDate: { type: String, required: true },
  },
  {
    versionKey: false,
    _id: false,
  }
);

const serviceSchema = new Schema<IService>(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    services: { type: [serviceCardSchema], required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Service = model<IService>("Service", serviceSchema);
