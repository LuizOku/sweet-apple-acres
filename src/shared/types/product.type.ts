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

export type ProductQueryParamsT = {
  search?: string;
  minRating?: number;
  maxRating?: number;
  minPrice?: number;
  maxPrice?: number;
  isAvailable?: boolean;
  limit?: number;
  offset?: number;
  orderBy?: string;
  sort?: "DESC" | "ASC";
};
