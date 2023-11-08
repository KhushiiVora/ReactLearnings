import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [text, setText] = useState("Change Text");
  const handleChangeText = () => {
    setText("I'm changed");
  };
  return (
    <div>
      Khushi Vora
      <Button
        handleClick={handleChangeText}
        buttonText={text}
        disabled={false}
        color="yellow"
      />
      <Button
        handleClick={() => console.log("Clicked2")}
        buttonText="Submit"
        disabled={false}
        color="pink"
      />
    </div>
  );
}

export default App;
