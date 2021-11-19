import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "30px" }}>
      <button onClick={incrementCounter}> Increase </button>
      <button onClick={decrementCounter}> Decrease </button>
      <div
        style={{
          marginTop: "30px",
          fontSize: "40px",
          color: "red",
          fontWeight: "bold",
        }}
      >
        {counter}
      </div>
    </div>
  );
}

export default App;
