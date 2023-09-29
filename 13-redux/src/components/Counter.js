import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  //redux automativally subscribes component to the selectors
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter)
  // to use a dispatcher we need useDispatch hook
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: "INCREMENT", value: 5});
  }

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  }

  const toggleHandler = () => {
    dispatch({ type: "TOGGLE" });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increase by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
