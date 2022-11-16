import React from "react";

export default function Filter(props) {
  return (
    <div>
      <label htmlFor={props.filter}>{props.filter}</label>
      <input
        id={props.filter}
        name={props.legend}
        value={props.filter}
        type="radio"
      />
    </div>
  );
}
