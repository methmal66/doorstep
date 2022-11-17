import React from "react";
import Filter from "./Filter";

export default function FilterGroup(props) {
  function handleRadioChange(event) {
    props.setSelectedFilters((filters) => ({
      ...filters,
      [props.children]: event.target.value,
    }));
  }

  return (
    <div onChange={handleRadioChange}>
      <fieldset>
        <legend>{props.children}</legend>
        {props.filters.map((filter) => (
          <Filter key={filter} legend={props.children}>
            {filter}
          </Filter>
        ))}
      </fieldset>
    </div>
  );
}
