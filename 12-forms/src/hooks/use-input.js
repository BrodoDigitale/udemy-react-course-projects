import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { ...state, value: action.value};
  }
  if (action.type === "BLUR") {
    return { ...state, isTouched: true };
  }
  if (action.type === "RESET") {
    return { ...state, isTouched: false, value: "" };
  }
  return inputReducer;
};

const useInput = (validateInputValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const valueIsValid = validateInputValue(inputState.value);
  const inputHasError = !valueIsValid && inputState.isTouched;

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const inputOnChangeHandler = (evt) => {
    dispatch({ type: "INPUT", value: evt.target.value });
  };

  const inputOnBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: inputHasError,
    inputOnChangeHandler,
    inputOnBlurHandler,
    reset,
  };
};

export default useInput;
