import { AxiosResponse } from "axios";

import { ProductQueryParamsT, ProductT } from "./../shared/types/product.type";
import api from "../services";

export const getProducts = (queryParams?: ProductQueryParamsT) =>
  api
    .get<ProductT[]>("/products", { params: { queryParams } })
    .then((response: AxiosResponse) => response.data);

export const getProductById = (productId: string) =>
  api
    .get<ProductT>(`/products/${productId}`)
    .then((response: AxiosResponse) => response.data);
