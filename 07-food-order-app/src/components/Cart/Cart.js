import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import { CartContext } from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

export const Cart = ({ closeCart }) => {
  const cartCtx = useContext(CartContext);
  const [checkoutInProgress, setCheckoutInProgress] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setCheckoutInProgress(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          //using bind we pass the parameter without calling function
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
   <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={closeCart}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>)
  

  return (
    <Modal onClose={closeCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkoutInProgress && <CheckoutForm onCancel={closeCart}/>}
      {!checkoutInProgress && modalActions}
    </Modal>
  );
};
