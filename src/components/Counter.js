import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);
  function increment() {
    // console.log("count increment");
    setcounter(counter + 1);
  }
  function decrement() {
    //  console.log("count decrement");
    setcounter(counter - 1);
  }
  function reset() {
    //   console.log("count reset");
    setcounter(0);
  }
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={() => increment()} style={{ margin: "0 5px" }}>
        Increment
      </button>
      <button onClick={() => decrement()} style={{ margin: "0 5px" }}>
        Decrement
      </button>
      <button onClick={() => reset()} style={{ margin: "0 5px" }}>
        Reset
      </button>
    </>
  );
};

export default Counter;
