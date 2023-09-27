import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import { CartContext } from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

export const Cart = ({ closeCart }) => {
  const cartCtx = useContext(CartContext);
  const [checkoutInProgress, setCheckoutInProgress] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitSuccess, setOrderSubmitSuccess] = useState(false);
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

  const submitOrderHandler = async (userData) => {
    console.log("user", userData, "order", cartCtx.items);
    setIsSubmitting(true);
    await fetch("https://64ea398abf99bdcc8e676b68.mockapi.io/orders", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        order: cartCtx.items,
      }),
    });
    //we could check for response and add error handling
    setIsSubmitting(false);
    setOrderSubmitSuccess(true);
    cartCtx.clearCart();
  };

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
    </div>
  );

  const CartModelContent = () => {
    return (
      <>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {checkoutInProgress && (
          <CheckoutForm onCancel={closeCart} onSubmit={submitOrderHandler} />
        )}
        {!checkoutInProgress && modalActions}
      </>
    );
  };

  const isSubmittingOrderContent = <p>Submitting order...</p>;
  const submitSuccessContent = <p>Your ordder has been sent!</p>;

  return (
    <Modal onClose={closeCart}>
      {!isSubmitting && !orderSubmitSuccess && <CartModelContent />}
      {isSubmitting && isSubmittingOrderContent}
      {orderSubmitSuccess && submitSuccessContent}
    </Modal>
  );
};
