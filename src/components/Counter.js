import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button style={{ margin: "0 5px" }}>Increment</button>
      <button style={{ margin: "0 5px" }}>Decrement</button>
      <button style={{ margin: "0 5px" }}>Reset</button>
    </>
  );
};

export default Counter;
