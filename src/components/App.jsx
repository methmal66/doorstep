import React from "react";
import logo from "../logo.svg";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  App: {
    textAlign: "center",
  },
  AppLogo: {
    height: "80px",
  },
  AppHeader: {
    backgroundColor: "#222",
    height: "150px",
    padding: "20px",
    color: "white",
  },
  AppIntro: {
    fontSize: "large",
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <div className={classes.AppHeader}>
        <img src={logo} className={classes.AppLogo} alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className={classes.AppIntro}>Hello World!</p>
    </div>
  );
}
