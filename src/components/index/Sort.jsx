import React from "react";

export default function Sort(props) {
  return (
    <div>
      <label htmlFor={props.children}>{props.children}</label>
      <input
        type="checkbox"
        name="sort"
        value={props.children}
        id={props.children}
      />
    </div>
  );
}
