import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "ui",
  initialState: {
    total: 0,
    productsInCart: [],
  },
  reducers: {
    addProdductToCart(state, action) {
      state.productsInCart.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
