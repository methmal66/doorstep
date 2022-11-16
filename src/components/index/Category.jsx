import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import SubCategory from "./SubCategory";

const useStyles = createUseStyles({
  collapsible: {
    width: "100%",
    backgroundColor: "#cccaca",
  },
  collapsed: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  hidden: {
    display: "none",
    overflow: "hidden",
  },
});

export default function Category(props) {
  const classes = useStyles();
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleClick() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div>
      <button className={classes.collapsible} onClick={handleClick}>
        {props.name}
      </button>
      <div className={isCollapsed ? classes.collapsed : classes.hidden}>
        {props.subCats.map((sub) => (
          <SubCategory text={sub} setSelectedCat={props.setSelectedCat} />
        ))}
      </div>
    </div>
  );
}
