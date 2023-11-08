import React, { useState } from "react";
import App2 from "./App2";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App(props) {
  const [count, setCount] = useState(0);
  const [interval, setIntervalID] = useState(null);
  const startCounter = () => {
    if (interval) {
      clearInterval(interval);
      setCount(0);
    }
    let intervalID = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setIntervalID(intervalID);
  };

  const stopCounter = () => {
    clearInterval(interval);
    setIntervalID(null);
  };
  return (
    <div>
      <Button buttonText="Start" handleClick={startCounter} />
      <br />
      <Counter text={count} />
      <Button buttonText="Stop" handleClick={stopCounter} />
      <div>
        <hr />
        <App2 />
      </div>
    </div>
  );
}

export default App;
