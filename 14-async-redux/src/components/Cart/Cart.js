import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <CartItem
              item={{
                id: i.id,
                title: i.name,
                quantity: i.quantity,
                total: i.totalPrice,
                price: i.price,
              }}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
