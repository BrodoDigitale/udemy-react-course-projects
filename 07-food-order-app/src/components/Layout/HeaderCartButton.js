import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { CartContext } from "../../store/cart-context";

export const HeaderCartButton = ({ onClick, totalItems }) => {
  const [btnIsAnimated, setBtnIsAnimated] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const buttonClasses = `${classes.button} ${
    btnIsAnimated ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length > 0) {
      setBtnIsAnimated(true);
    }

    const timer = setTimeout(() => {
      setBtnIsAnimated(false);
    }, 300);

    //cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};
