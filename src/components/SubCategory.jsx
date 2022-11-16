import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100%",
  },
});

export default function SubCategory(props) {
  const classes = useStyles();

  function handleClick() {
    props.setSelectedCat(props.text);
  }

  return (
    <button className={classes.root} onClick={handleClick}>
      {props.text}
    </button>
  );
}
