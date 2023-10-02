import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  //redux automativally subscribes component to the selectors
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter)
  // to use a dispatcher we need useDispatch hook
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.incremet(5));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
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
