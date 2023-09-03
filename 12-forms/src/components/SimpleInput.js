import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");
  let formIsValid = enteredNameIsValid && enteredEmailIsValid ? true : false;

  const inputHandler = (evt) => {
    setEnteredName(evt.target.value);
  };

  const emailInputHandler = (evt) => {
    setEnteredEmail(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    setEnteredNameIsTouched(true);
    setEnteredEmailIsTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName, enteredEmail);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  };

  const nameInputBlurHandler = (evt) => {
    setEnteredNameIsTouched(true);
  };

  const emailInputBlurHandler = (evt) => {
    setEnteredEmailIsTouched(true);
  };

  let inputClasses = (val) => {
    return val ? "form-control invalid" : "form-control";
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={inputClasses(!enteredNameIsValid && enteredNameIsTouched)}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && enteredNameIsTouched && (
          <p className="error-text">Invalid input value</p>
        )}
      </div>
      <div
        className={inputClasses(!enteredEmailIsValid && enteredEmailIsTouched)}
      >
        <label htmlFor="email">Your e-mail</label>
        <input
          type="text"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {!enteredEmailIsValid && enteredEmailIsTouched && (
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
