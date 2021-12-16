import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Side } from "../Layout";
import { useHistory } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import { Container, Typography, useMediaQuery } from "@material-ui/core";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

function MergeFix({ token }) {
  const { fullSide, Contacts, handleContacts } = React.useContext(Side);
  const matches = useMediaQuery("(max-width: 1024px)");

  const useStyles = makeStyles((theme) => ({
    container: {
      marginLeft: matches ? 0 : fullSide ? 265 : 0,
      height: "90vh",
      backgroundColor: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    fab: {
      position: "absolute",
      visibility: "hidden",
      width: theme.spacing(6),
      height: theme.spacing(6),
      bottom: 10,
      right: 10,
    },
    show: {
      visibility: "visible",
    },
    BgIconContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    BgIcon: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  }));

  const history = useHistory();
  const handleClick = () => {
    history.push("/new");
  };
  const classes = useStyles();
  const show = useMediaQuery("(max-width: 600px)");

  return (
    <main
      className={clsx({
        [classes.container]: true,
      })}
    >
      <Container maxWidth="sm" className={classes.BgIconContainer}>
        <AccountCircleSharpIcon
          color="disabled"
          className={classes.BgIcon}
          fontSize="large"
        />
        <Typography
          variant="h5"
          color="textSecondary"
          style={{
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            textAlign: "center",
          }}
        >
          Congratulations! No new suggestions
        </Typography>
      </Container>
      <Fab
        color="primary"
        aria-label="Add New Contact"
        onClick={handleClick}
        className={clsx({ [classes.fab]: true, [classes.show]: show })}
      >
        <AddIcon fontSize="small" />
      </Fab>
    </main>
  );
}

export default MergeFix;
