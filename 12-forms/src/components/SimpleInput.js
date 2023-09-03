const SimpleInput = ({
  id,
  inputHasError,
  errorText,
  label,
  inputName,
  onChangeHandler,
  onBlurHandler,
  inputValue
}) => {
  let inputClasses = (val) => {
    return val ? "form-control invalid" : "form-control";
  };

  return (
    <div className={inputClasses(inputHasError)}>
      <label htmlFor={id}>{inputName}</label>
      <input
        type="text"
        id={id}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        value={inputValue}
      />
      {inputHasError && <p className="error-text">{errorText}</p>}
    </div>
  );
};

export default SimpleInput;
