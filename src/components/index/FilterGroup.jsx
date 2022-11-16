import React, { useState } from "react";
import Filter from "./Filter";

export default function FilterGroup(props) {
  const [value, setValue] = useState();

  function handleRadioChange(event) {
    props.setSelectedFilters((filters) => ({
      ...filters,
      [props.legend]: event.target.value,
    }));
  }

  return (
    <div onChange={handleRadioChange}>
      <fieldset>
        <legend>{props.legend}</legend>
        {props.filters.map((filter) => (
          <Filter key={filter} filter={filter} legend={props.legend} />
        ))}
      </fieldset>
    </div>
  );
}
