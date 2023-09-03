import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const nameValidator = (val) => val.trim() !== "";
  const emailValidator = (val) => val.includes("@");

 const {
   value: enteredName,
   isValid: enteredNameIsValid,
   hasError: nameInputHasError,
   inputOnChangeHandler: nameOnChangeHandler,
   inputOnBlurHandler: nameOnBlurHandler,
   reset: resetNameInput,
 } = useInput(nameValidator);

 const {
   value: enteredEmail,
   isValid: enteredEmailIsValid,
   hasError: emailInputHasError,
   inputOnChangeHandler: emailOnChangeHandler,
   inputOnBlurHandler: emailOnBlurHandler,
   reset: resetEmailInput,
 } = useInput(emailValidator);

  
  const submitHandler = (evt) => {
    evt.preventDefault();
    nameOnBlurHandler();
    emailOnBlurHandler();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName, enteredEmail);
    resetNameInput();
    resetEmailInput();
  };


  let formIsValid = enteredEmailIsValid && enteredNameIsValid;

  let inputClasses = (val) => {
    return val ? "form-control invalid" : "form-control";
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={inputClasses(nameInputHasError)}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameOnChangeHandler}
          onBlur={nameOnBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Invalid input value</p>
        )}
      </div>
      <div
        className={inputClasses(emailInputHasError)}
      >
        <label htmlFor="email">Your e-mail</label>
        <input
          type="text"
          id="email"
          onChange={emailOnChangeHandler}
          onBlur={emailOnBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Invalid email value</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
