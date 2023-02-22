export type ProductT = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  releated: ProductT[];
  isAvailable: boolean;
};
