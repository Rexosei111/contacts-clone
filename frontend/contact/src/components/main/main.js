import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content";
import { Side } from "../Layout"

function Main() {
  const fullSide = React.useContext(Side)

  const useStyles = makeStyles((theme) => ({
    container : {
      marginLeft: fullSide ? 280: 0,
      overflowX: "hidden",
      height: "90vh",
      padding: "5px 10px",
      backgroundColor: "#ffffff"
  }
  }));

  const classes = useStyles();
  return (
      <main className={classes.container}>
        <Content />
      </main>
  );
}

export default Main;
