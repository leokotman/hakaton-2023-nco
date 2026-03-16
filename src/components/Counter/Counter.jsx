import React, { useState } from 'react';
import classes from './Counter.module.css';

export const Counter = (props) => {
  // @Counter.jsx (4-26)
  // TODO: This looks like a sandbox/demo component. If you don't plan
  // to use it in the game, move it out of main components or remove it.
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment} className={classes.myButton}>
        +
      </button>
      <button onClick={decrement} className={classes.myButton}>
        -
      </button>
    </div>
  );
};
