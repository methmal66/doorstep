import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    width: 1000,
    height: 300,
    border: "1px solid black",
  },
  image: {
    width: 300,
    height: 300,
  },
  details: {
    width: 700,
    height: 300,
    boxSizing: "border-box",
    padding: 10,
  },
  title: {
    fontSize: "1.2rem",
  },
  price: {
    fontSize: "2rem",
  },
});

export default function ItemPreview(props) {
  const classes = useStyles();

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={classes.root}>
      <img src={props.imageUrl} className={classes.image} />
      <div className={classes.details}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.price}>{"Rs. " + formatPrice(props.price)}</div>
        <div>{props.deliveryFee == 0 ? "Free delivery" : props.price}</div>
      </div>
    </div>
  );
}
