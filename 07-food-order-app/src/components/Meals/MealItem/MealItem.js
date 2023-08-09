import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";
import { useContext } from "react";
import { CartContext } from "../../../store/cart-context";

export const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  //toFixed(2) makes sure we have 2 decimal places
  const formattedPrice = `$${price.toFixed(2)}`;

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      amount: amount,
      name: name,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddtoCart={onAddToCartHandler} />
      </div>
    </li>
  );
};
