import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsInvalid, setEnteredNameIsInvalid] = useState(false);

  const inputHandler = (evt) => {
    setEnteredName(evt.target.value);
    
  }

  const submitHandler = (evt) => {
    evt.preventDefault();

    if(enteredName.trim() === "") {
      setEnteredNameIsInvalid(true);
      console.log("Error!!")
    }
    console.log(enteredName);
    setEnteredName("");
  }

  let inputClasses = enteredNameIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputHandler} value={enteredName}/>
        {enteredNameIsInvalid && <p className="error-text">Invalid input value</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
