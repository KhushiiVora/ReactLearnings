import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Text from "./components/Text";

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
  const handleDelete = (index) => {
    const tempTexts = [...texts];
    tempTexts.splice(index, 1);
    setTexts(tempTexts);
  };
  return (
    <div>
      <Input value={text} onChange={handleOnChange} />
      <Button
        onClick={handleOnClick}
        btnText="Add"
        disabled={text ? false : true}
      />
      {!texts.length == 0 && (
        <Text handleDelete={handleDelete} displayTexts={texts} />
      )}
    </div>
  );
}

export default App;
