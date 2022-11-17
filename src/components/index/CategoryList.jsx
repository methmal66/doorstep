import React from "react";
import { createUseStyles } from "react-jss";
import Category from "./Category";

const useStyles = createUseStyles({
  root: {
    width: 250,
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    marginRight: 10,
    marginBottom: 10,
  },
  title: {
    textAlign: "center",
  },
  reset: {
    marginTop: 7,
    marginBottom: 7,
    width: 50,
  },
});

const categories = [
  {
    name: "Electronic Devices",
    subCats: [
      "Computer",
      "Mobile phones",
      "Smart watch",
      "Smart TV",
      "Headphones",
      "Earphones",
    ],
  },
  {
    name: "Sport goods",
    subCats: ["Cloths", "Rackets", "Shoes", "Balls"],
  },
  {
    name: "Grossary items",
    subCats: ["Food", "Stationery"],
  },
];

export default function CategoryList(props) {
  const classes = useStyles();

  function resetCategory() {
    props.setSelectedCat(null);
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>Categories</div>
      {categories.map((cat) => (
        <Category
          key={cat.name}
          name={cat.name}
          subCats={cat.subCats}
          setSelectedCat={props.setSelectedCat}
        />
      ))}
      <input
        className={classes.reset}
        type="reset"
        value="Reset"
        onClick={resetCategory}
      />
    </div>
  );
}
