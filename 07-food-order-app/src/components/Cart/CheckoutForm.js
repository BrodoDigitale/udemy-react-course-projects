import classes from "./Checkout.module.css";
import { useRef } from "react";

const CheckoutForm = props => {

const nameInput = useRef();
const streetInput = useRef();
const capInput = useRef();
const cityInput = useRef();


const onConfirm = (evt) => {
    evt.preventDefault();
    const name = nameInput.current.value;
    const street = streetInput.current.value;
    const cap = capInput.current.value;
    const city = cityInput.current.value;

    //validation
    console.log(name, street, city, cap)
}
return (
  <form onSubmit={onConfirm} className={classes.form}>
    <div className={classes.control}>
      <label htmlFor="name">Your name</label>
      <input ref={nameInput} type="text" id="name" />
    </div>
    <div className={classes.control}>
      <label htmlFor="street">Street</label>
      <input ref={streetInput} type="text" id="street" />
    </div>
    <div className={classes.control}>
      <label htmlFor="CAP">Postal code</label>
      <input ref={capInput} type="text" id="CAP" />
    </div>
    <div className={classes.control}>
      <label htmlFor="city">City</label>
      <input ref={cityInput} type="text" id="city" />
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