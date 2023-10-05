import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItems = useSelector(state => state.cart.totalQuantity);
  const cartToggleHandler = () => {
    dispatch(uiActions.toggleCartIsOpen());
  }
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
