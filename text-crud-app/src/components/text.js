import React, { useEffect, useState } from "react";
import Button from "./button";
import Input from "./input";

function Text(props) {
  const [elementToEdit, setElementToEdit] = useState("");
  const [editText, setEditText] = useState("");
  const handleEdit = (text, index) => {
    if (editText === text) {
      props.displayTexts[index] = editText;
      setEditText("");
      setElementToEdit("");
    } else {
      setEditText(text);
      setElementToEdit(text + index);
    }
  };
  const handleOnChange = (e) => {
    setEditText(e?.target?.value);
  };
  const handleDelete = (index) => {
    props.displayTexts.splice(index, 1);
    //HOW TO RE RENDER AT THIS POINT
  };

  return (
    <div>
      {props.displayTexts.map((text, index) => (
        <div key={text + index}>
          {elementToEdit === text + index ? (
            <Input value={editText} onChange={handleOnChange} />
          ) : (
            text
          )}
          {elementToEdit === text + index ? (
            <Button
              onClick={() => handleEdit(editText, index)}
              btnText="Save"
            />
          ) : (
            <Button onClick={() => handleEdit(text, index)} btnText="Edit" />
          )}
          <Button onClick={() => handleDelete(index)} btnText="Delete" />
        </div>
      ))}
    </div>
  );
}

export default Text;
