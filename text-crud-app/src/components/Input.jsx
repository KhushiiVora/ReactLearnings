import React from "react";

function Input(props) {
  return <input value={props.value} onChange={props.onChange} type="text" />;
}

export default Input;
