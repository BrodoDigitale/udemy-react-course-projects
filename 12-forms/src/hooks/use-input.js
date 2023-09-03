import { useState } from "react";

const useInput = (validateInputValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInputValue(enteredValue);
  const inputHasError = !valueIsValid && isTouched;

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  }

  const inputOnChangeHandler = (evt) => {
    setEnteredValue(evt.target.value);
  };

  const inputOnBlurHandler = (evt) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: inputHasError,
    inputOnChangeHandler,
    inputOnBlurHandler,
    reset
  };
};

export default useInput;
