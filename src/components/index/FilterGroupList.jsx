import React from "react";
import FilterGroup from "./FilterGroup";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: 250,
    border: "1px solid black",
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
  },
  reset: {
    marginTop: 7,
    marginBottom: 7,
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
      <FilterGroup
        filters={["New", "Used"]}
        setSelectedFilters={props.setSelectedFilters}
      >
        Condition
      </FilterGroup>
      <FilterGroup
        filters={["Free", "Paid"]}
        setSelectedFilters={props.setSelectedFilters}
      >
        Delivery
      </FilterGroup>
      <input
        type="reset"
        value="Reset"
        className={classes.reset}
        onClick={resetFilters}
      />
    </form>
  );
}
