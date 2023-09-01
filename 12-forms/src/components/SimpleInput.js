import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsInvalid, setEnteredNameIsInvalid] = useState(false);

  const inputHandler = (evt) => {
    setEnteredName(evt.target.value);
  };

  const inputValidator = (val) => {
    if (val.trim() === "") {
      setEnteredNameIsInvalid(true);
      console.log("Error!!");
    }
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    inputValidator(enteredName);
    setEnteredName("");
  };

  const nameInputBlurHandler = (evt) => {
    inputValidator(enteredName);
  };

  let inputClasses = enteredNameIsInvalid
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
        {enteredNameIsInvalid && (
          <p className="error-text">Invalid input value</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
