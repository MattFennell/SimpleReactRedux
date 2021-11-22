import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slice";

function App() {
  const dispatch = useDispatch();

  const reduxCounter = useSelector((state) => {
    console.log("state", state);
    return state.counter.counterValue;
  });

  const reduxCounterTwo = useSelector((state) => {
    console.log("state", state);
    return state.counter.counterTwo;
  });

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "30px" }}>
      Hello
      <button onClick={() => dispatch(increment(10))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>{reduxCounter}</div>
      <div>{reduxCounterTwo}</div>
    </div>
  );
}

export default App;
