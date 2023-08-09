import classes from "./MealItemForm.module.css";
import { Input } from "../../UI/Input";
import { useRef, useState } from "react";

export const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    if (
      enteredAmount.trim().length === 0 ||
      +enteredAmount < 0 ||
      +enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    //we don't call context method as we have only amount
    props.onAddtoCart(+enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter the valid amount</p>}
    </form>
  );
};
