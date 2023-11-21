import React, { useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import Text from "./components/text";

function App() {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = (e) => {
    setText("");
    setTexts((prevState) => {
      return [...prevState, text];
    });
  };
  return (
    <div>
      <Input value={text} onChange={handleOnChange} />
      <Button onClick={handleOnClick} btnText="Add" />
      {!texts.length == 0 && <Text displayTexts={texts} />}
    </div>
  );
}

export default App;
