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
    addProductToCart(state, action) {
      if (!state.products.find((pr) => pr.id === action.payload.id)) {
        state.products = [...state.products, action.payload];
      }
    },
    removeProductFromCart(state, action) {
      state.products = state.products.filter((pr) => pr.id !== action.payload);
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

export const { setProductsInCart, addProductToCart, removeProductFromCart } =
  cartSlice.actions;

export const selectProductsInCart = (state: AppState) => state.cart.products;

export default cartSlice.reducer;
