import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    width: 1000,
    height: 300,
    border: "1px solid black",
    marginBottom: 10,
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
  deliveryFee: {
    fontSize: "0.85rem",
  },
});

export default function ItemPreview(props) {
  const classes = useStyles();

  function formatPrice(price) {
    return "Rs. " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className={classes.root}>
      <img src={props.imageUrl} className={classes.image} />
      <div className={classes.details}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.price}>{formatPrice(props.price)}</div>
        <div className={classes.deliveryFee}>
          {props.deliveryFee == 0
            ? "Free delivery"
            : "Delivery " + formatPrice(props.deliveryFee)}
        </div>
        <div>{props.condition}</div>
      </div>
    </div>
  );
}
