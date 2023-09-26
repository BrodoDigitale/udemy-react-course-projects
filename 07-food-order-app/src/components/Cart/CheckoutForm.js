import classes from "./Checkout.module.css";
import { useRef, useState } from "react";


const isEmpty = (str) => str.trim() === "";
const isFiveChars = (str) => str.trim().length === 5;

const CheckoutForm = props => {

const nameInput = useRef();
const streetInput = useRef();
const capInput = useRef();
const cityInput = useRef();

const [formInputsValidity, setFormInputsValidity] = useState({
  name: true,
  street: true,
  city: true,
  cap: true
});


const onConfirm = (evt) => {
  evt.preventDefault();
  const name = nameInput.current.value;
  const street = streetInput.current.value;
  const cap = capInput.current.value;
  const city = cityInput.current.value;

  //validation
  setFormInputsValidity({
    name: !isEmpty(name),
    street: !isEmpty(street),
    city: !isEmpty(city),
    cap: isFiveChars(cap),
  });
  
  const formIsValid =
    !isEmpty(name) && !isEmpty(street) && !isEmpty(city) && isFiveChars(cap);

  if (!formIsValid) {
    //error 
    console.log("ERROR");
  }
  //submit data
  console.log(name, street, city, cap);
}
return (
  <form onSubmit={onConfirm} className={classes.form}>
    <div
      className={`${classes.control} ${
        formInputsValidity.name ? "" : classes.invalid
      }`}
    >
      <label htmlFor="name">Your name</label>
      <input ref={nameInput} type="text" id="name" />
      {!formInputsValidity.name && <p>Please enter valid name</p>}
    </div>
    <div
      className={`${classes.control} ${
        formInputsValidity.street ? "" : classes.invalid
      }`}
    >
      <label htmlFor="street">Street</label>
      <input ref={streetInput} type="text" id="street" />
      {!formInputsValidity.street && <p>Please enter valid street</p>}
    </div>
    <div
      className={`${classes.control} ${
        formInputsValidity.cap ? "" : classes.invalid
      }`}
    >
      <label htmlFor="CAP">Postal code</label>
      <input ref={capInput} type="text" id="CAP" />
      {!formInputsValidity.cap && <p>Cap must be 5 characters</p>}
    </div>
    <div
      className={`${classes.control} ${
        formInputsValidity.city ? "" : classes.invalid
      }`}
    >
      <label htmlFor="city">City</label>
      <input ref={cityInput} type="text" id="city" />
      {!formInputsValidity.city && <p>Please enter valid city</p>}
    </div>
    <div className={classes.actions}>
      <button>Confirm</button>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
    </div>
  </form>
);
}

export default CheckoutForm;