export interface IServiceCard {
  serviceId: number;
  name: string;
  price: string;
  rate: string;
  isGuestFavorite: boolean;
  images: string[];
}
export interface IService {
  id: number;
  title: string;
  services: IServiceCard[];
}
