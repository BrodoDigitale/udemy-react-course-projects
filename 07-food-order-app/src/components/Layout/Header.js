import React, { useContext } from "react";
import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import { HeaderCartButton } from "./HeaderCartButton";
import { CartContext } from "../../store/cart-context";

export const Header = ({ openCart }) => {
  const ctx = useContext(CartContext);

  const totalItems = ctx.items.reduce((i, acc) => (acc += i.amount), 0);
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={openCart} totalItems={totalItems} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="a table full of food" />
      </div>
    </>
  );
};
