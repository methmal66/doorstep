import React, { useState, useEffect } from "react";
import ItemPreviewList from "./ItemPreviewList";
import CategoryList from "./CategoryList";
import FilterGroupList from "./FilterGroupList";
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
  const [selectedFilters, setSelectedFilters] = useState({
    Condition: null,
    Delivery: null,
  });
  useEffect(() => console.log(selectedFilters), [selectedFilters]);

  return (
    <div className={classes.root}>
      <div>
        <CategoryList setSelectedCat={setSelectedCat} />
        <FilterGroupList setSelectedFilters={setSelectedFilters} />
      </div>
      <ItemPreviewList cat={selectedCat} filters={selectedFilters} />
    </div>
  );
}
