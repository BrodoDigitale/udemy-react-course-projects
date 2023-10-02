import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
  },
});
