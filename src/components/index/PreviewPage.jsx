import React, { useState, useEffect } from "react";
import ItemPreviewList from "./ItemPreviewList";
import CategoryList from "./CategoryList";
import FilterGroupList from "./FilterGroupList";
import { createUseStyles } from "react-jss";
import SortList from "./SortList";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
  },
});

export default function PreviewPage() {
  const classes = useStyles();

  const [selectedSorts, setSelectedSorts] = useState({
    Price: false,
    Date: false,
  });
  const [selectedFilters, setSelectedFilters] = useState({
    Condition: null,
    Delivery: null,
  });
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => console.log(selectedSorts), [selectedSorts]);
  useEffect(() => console.log(selectedFilters), [selectedFilters]);
  useEffect(() => console.log(selectedCat), [selectedCat]);

  return (
    <div className={classes.root}>
      <div>
        <SortList setSelectedSorts={setSelectedSorts} />
        <FilterGroupList setSelectedFilters={setSelectedFilters} />
        <CategoryList setSelectedCat={setSelectedCat} />
      </div>
      <ItemPreviewList />
    </div>
  );
}
