import { createAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./";
import { HYDRATE } from "next-redux-wrapper";
import { ProductT } from "@/shared/types/product.type";

const hydrate = createAction<AppState>(HYDRATE);

export type CartState = {
  products: ProductT[];
};

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductsInCart(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.cart,
      };
    });
  },
});

export const { setProductsInCart } = cartSlice.actions;

export const selectProductsInCart = (state: AppState) => state.cart.products;

export default cartSlice.reducer;
