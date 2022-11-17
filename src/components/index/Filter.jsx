import React from "react";

export default function Filter(props) {
  return (
    <div>
      <label htmlFor={props.children}>{props.children}</label>
      <input
        id={props.children}
        name={props.legend}
        value={props.children}
        type="radio"
      />
    </div>
  );
}
