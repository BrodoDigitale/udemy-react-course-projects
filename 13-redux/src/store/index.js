import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    incremet(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
/*const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "TOGGLE") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
};*/

export const store = configureStore({
  //could be an object with many reducers
  reducer: counterSlice.reducer,
});

export const actions = counterSlice.actions;