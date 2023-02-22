export type OrderItemT = {
  productId: string;
  quantity: number;
};

export type OrderT = {
  name: string;
  deliveryAddress: string;
  items: OrderItemT[];
};
