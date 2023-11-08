import React, { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App2() {
  const [textCount, setTextCount] = useState(0);
  const [count, setCount] = useState(0);
  const [interval, setIntervalID] = useState(null);

  const textCounter = (e) => {
    const inputCount = e.target.value;
    if (Number(inputCount)) {
      setTextCount(Number(inputCount));
      setCount(Number(inputCount));
    }
  };
  const startCounter = () => {
    clearInterval(interval);
    let intervalID = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount) {
          return prevCount - 1;
        } else {
          stopCounter();
          return 0;
        }
      });
    }, 1000);
    setIntervalID(intervalID);
  };
  const stopCounter = () => {
    clearInterval(interval);
    setIntervalID(null);
  };

  return (
    <div>
      <input type="text" onChange={(e) => textCounter(e)} />
      <br />
      <Button buttonText="Start" handleClick={startCounter} />
      <br />
      <Counter text={count} />
      <Button buttonText="Stop" handleClick={stopCounter} />
    </div>
  );
}

export default App2;
