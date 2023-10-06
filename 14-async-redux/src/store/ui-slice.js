import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsOpen: false,
    notification: null,
  },
  reducers: {
    toggleCartIsOpen(state) {
      state.cartIsOpen = !state.cartIsOpen;
    },
    setNotificiation(state, action) {
      const { status, title, msg } = action.payload;
      state.notification = { status: status, title: title, mgs: msg };
    },
  },
});

export const uiActions = uiSlice.actions;
