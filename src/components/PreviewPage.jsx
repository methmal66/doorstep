import React from "react";
import ItemPreviewList from "./ItemPreviewList";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
  },
});

export default function PreviewPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ItemPreviewList />
    </div>
  );
}
