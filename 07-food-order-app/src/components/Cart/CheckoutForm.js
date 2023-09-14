import classes from "./Checkout.module.css";

const CheckoutForm = props => {

const onConfirm = (evt) => {
    evt.preventDefault();
}
return (
  <form onSubmit={onConfirm} className={classes.form}>
    <div className={classes.control}>
      <label htmlFor="name">Your name</label>
      <input type="text" id="name" />
    </div>
    <div className={classes.control}>
      <label htmlFor="street">Street</label>
      <input type="text" id="street" />
    </div>
    <div className={classes.control}>
      <label htmlFor="CAP">Postal code</label>
      <input type="text" id="CAP" />
    </div>
    <div className={classes.control}>
      <label htmlFor="city">City</label>
      <input type="text" id="city" />
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