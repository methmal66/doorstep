import React from "react";
import { createUseStyles } from "react-jss";
import Sort from "./Sort";

const useStyles = createUseStyles({
  root: {
    width: 250,
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
  },
  heading: {
    textAlign: "center",
  },
  reset: {
    marginBottom: 7,
    marginTop: 7,
    width: 50,
  },
});

export default function SortList(props) {
  const classes = useStyles();

  function handleCheckboxChange(event) {
    props.setSelectedSorts((sorts) => ({
      ...sorts,
      [event.target.value]: event.target.checked,
    }));
  }

  function resetSorts() {
    props.setSelectedSorts({
      Price: false,
      Date: false,
    });
  }

  return (
    <form className={classes.root} onChange={handleCheckboxChange}>
      <div className={classes.heading}>Sort</div>
      <Sort>Price</Sort>
      <Sort>Date</Sort>
      <input
        type="reset"
        value="Reset"
        className={classes.reset}
        onClick={resetSorts}
      />
    </form>
  );
}
