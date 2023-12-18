import React from "react";

function Button(props) {
  console.log("props item", props);
  return <div>{props.text}</div>;
}

export default Button;
