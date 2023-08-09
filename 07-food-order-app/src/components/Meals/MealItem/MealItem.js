import classes from "./MealItem.module.css";

export const MealItem = ({ name, description, price }) => {
  //toFixed(2) makes sure we have 2 decimal places
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div></div>
    </li>
  );
};
