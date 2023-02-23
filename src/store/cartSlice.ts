import { createAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from "./";
import { HYDRATE } from "next-redux-wrapper";
import { ProductT } from "@/shared/types/product.type";

const hydrate = createAction<AppState>(HYDRATE);

export type CartState = {
  products: Array<ProductT & { quantity: number }>;
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
    increaseProductQuantity(state, action) {
      if (state.products.find((pr) => pr.id === action.payload)) {
        state.products = state.products.map((pr) => {
          if (pr.id === action.payload) {
            return { ...pr, quantity: pr.quantity + 1 };
          }
          return pr;
        });
      } else {
        state.products = [...state.products, action.payload];
      }
    },
    decreaseProductQuantity(state, action) {
      const newProductsState = (state.products = state.products.map((pr) => {
        if (pr.id === action.payload) {
          return { ...pr, quantity: pr.quantity - 1 };
        }
        return pr;
      }));
      state.products = newProductsState.filter((pr) => pr.quantity > 0);
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

export const {
  setProductsInCart,
  addProductToCart,
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

export const selectProductsInCart = (state: AppState) => state.cart.products;

export const totalCartPrice = (state: AppState) =>
  state.cart.products.length > 0
    ? state.cart.products
        .map((product) => product.price * product.quantity)
        .reduce((prev, next) => prev + next)
    : 0;

export default cartSlice.reducer;
