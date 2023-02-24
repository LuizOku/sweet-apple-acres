import { AxiosResponse } from "axios";

import { OrderT } from "./../shared/types/order.type";
import api from "../services";

export const createOrder = (body: OrderT) =>
  api
    .post<OrderT[]>("/orders", body, {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response: AxiosResponse) => response.data);
