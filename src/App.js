import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slice";

function App() {
  const countValue = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment());
  };

  const decrementCounter = () => {
    dispatch(decrement());
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "30px" }}>
      <button onClick={incrementCounter}> Increase </button>
      <button onClick={decrementCounter}> Decrease </button>
      <div>{countValue}</div>
    </div>
  );
}

export default App;
