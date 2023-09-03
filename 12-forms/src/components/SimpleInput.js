import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  
  const enteredNameIsValid = enteredName.trim() !== "";
  let formIsValid = enteredNameIsValid ? true : false;

  const inputHandler = (evt) => {
    setEnteredName(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    setEnteredNameIsTouched(true);
    if(!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameIsTouched(false);
  };

  const nameInputBlurHandler = (evt) => {
    setEnteredNameIsTouched(true);
  };

  let inputClasses = !enteredNameIsValid && enteredNameIsTouched
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
