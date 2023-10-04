import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsOpen: false,
  },
  reducers: {
    toggleCartIsOpen(state) {
      state.cartIsOpen = !state.cartIsOpen;
    },
  },
});

export const uiActions = uiSlice.actions;
