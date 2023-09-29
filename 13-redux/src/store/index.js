import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const reducer = (state = initialState, action) => {
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
};

export const store = createStore(reducer);
