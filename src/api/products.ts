import { AxiosResponse } from "axios";

import { ProductT } from "./../shared/types/product.type";
import api from "../services";

type ProductQueryParamsT = {
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

export const getProducts = (queryParams: ProductQueryParamsT) =>
  api
    .get<ProductT[]>("/products", { params: queryParams })
    .then((response: AxiosResponse) => response.data);

export const getProductById = (productId: string) =>
  api
    .get<ProductT>(`/products/${productId}`)
    .then((response: AxiosResponse) => response.data);
