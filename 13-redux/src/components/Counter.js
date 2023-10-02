import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store';

const Counter = () => {
  //redux automativally subscribes component to the selectors
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter)
  // to use a dispatcher we need useDispatch hook
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(actions.incremet(5));
  }

  const decrementHandler = () => {
    dispatch(actions.decrement());
  }

  const toggleHandler = () => {
    dispatch(actions.toggle());
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
