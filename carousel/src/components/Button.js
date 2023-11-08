import React from "react";
function Button(props) {
  const {
    buttonText = "",
    handleClick = () => {},
    color = "",
    disabled = false,
  } = props;
  return (
    <button
      onClick={handleClick}
      style={{ background: color, margin: 1 + "rem" }}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;
