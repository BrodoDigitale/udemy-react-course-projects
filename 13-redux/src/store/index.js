
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { authSlice } from "./authSlice";

export const store = configureStore({
  //could be an object with many reducers
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
