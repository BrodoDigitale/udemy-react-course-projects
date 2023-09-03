import useInput from "../hooks/use-input";
import SimpleInput from "./SimpleInput";

const BasicForm = (props) => {
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
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    inputOnChangeHandler: lastNameOnChangeHandler,
    inputOnBlurHandler: lastNameOnBlurHandler,
    reset: resetLastNameInput,
  } = useInput(nameValidator);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputOnChangeHandler: emailOnChangeHandler,
    inputOnBlurHandler: emailOnBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValidator);

  let formIsValid =
    enteredEmailIsValid && enteredNameIsValid && enteredLastNameIsValid;
  const submitHandler = (evt) => {
    evt.preventDefault();
    nameOnBlurHandler();
    emailOnBlurHandler();

    if (!formIsValid) {
      return;
    }
    console.log(enteredName, enteredLastName, enteredEmail);
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <SimpleInput
          id={"name"}
          inputHasError={nameInputHasError}
          errorText={"Enter valid name"}
          inputName={"First Name"}
          onChangeHandler={nameOnChangeHandler}
          onBlurHandler={nameOnBlurHandler}
          inputValue={enteredName}
        />
        <SimpleInput
          id={"lastName"}
          inputHasError={lastNameInputHasError}
          errorText={"Enter valid last name"}
          inputName={"Last Name"}
          onChangeHandler={lastNameOnChangeHandler}
          onBlurHandler={lastNameOnBlurHandler}
          inputValue={enteredLastName}
        />
      </div>
      <div className="form-control">
        <SimpleInput
          id={"eMail"}
          inputHasError={emailInputHasError}
          errorText={"Enter valid e-mail"}
          inputName={"E-Mail Address"}
          onChangeHandler={emailOnChangeHandler}
          onBlurHandler={emailOnBlurHandler}
          inputValue={enteredEmail}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
