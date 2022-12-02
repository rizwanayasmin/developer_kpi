import React from "react";
import "./Button.scss";

function NormalButton(props) {
  const {
    className = "",
    buttonType = "commonButton",
    label = "",
    onClick,
    id,
    type = "submit",
    disabled = false,
    rightIcon = "",
  } = props;

  return (
    <>
      <button
        id={id}
        type={type}
        className={`${buttonType} ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
        {rightIcon !== "" ? (
          <span className={`btn-right-icon ${rightIcon}`}></span>
        ) : null}
      </button>
    </>
  );
}

export default NormalButton;
