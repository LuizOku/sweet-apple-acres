import { OrderT } from "@/shared/types/order.type";
import api from "@/services";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const response = await api.post<OrderT[]>("/orders", req.body, {
      headers: {
        "content-type": "application/json",
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
}
