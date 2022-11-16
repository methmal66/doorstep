import React from "react";
import FilterGroup from "./FilterGroup";
import { createUseStyles } from "react-jss";

const groups = [
  {
    name: "Condition",
    filters: ["New", "Used"],
  },
  {
    name: "Delivery",
    filters: ["Free", "Paid"],
  },
];

const useStyles = createUseStyles({
  root: {
    width: 250,
    height: 210,
    border: "1px solid black",
  },
  title: {
    textAlign: "center",
  },
  reset: {
    marginTop: 7,
  },
});

export default function FilterGroupList(props) {
  const classes = useStyles();

  function resetFilters() {
    props.setSelectedFilters({
      Condition: null,
      Delivery: null,
    });
  }

  return (
    <form className={classes.root}>
      <div className={classes.title}>Filters</div>
      {groups.map((group) => (
        <FilterGroup
          legend={group.name}
          filters={group.filters}
          setSelectedFilters={props.setSelectedFilters}
        />
      ))}
      <input
        type="reset"
        value="Reset"
        className={classes.reset}
        onClick={resetFilters}
      />
    </form>
  );
}
