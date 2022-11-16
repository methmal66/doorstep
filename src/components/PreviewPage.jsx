import React, { useState } from "react";
import ItemPreviewList from "./ItemPreviewList";
import CategorySelection from "./CategorySelection";
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
  const [selectedCat, setSelectedCat] = useState();

  return (
    <div className={classes.root}>
      <CategorySelection setSelectedCat={setSelectedCat} />
      <ItemPreviewList cat={selectedCat} />
    </div>
  );
}
