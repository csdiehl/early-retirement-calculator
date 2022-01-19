import React from "react";
import './Input.css'

const Input = (props) => {
  return (
    <div className = "input-container">
      <label className = "label">{props.label}</label>
      <input className = "input"
        name = {props.name}
        type={props.type}
        value={props.value}
        min={props.min}
        max={props.max}
      ></input>
    </div>
  );
};

export default Input;
