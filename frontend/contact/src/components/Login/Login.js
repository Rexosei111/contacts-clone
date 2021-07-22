import React from "react";
import LoginForm from "./Form";
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
    Paper,
  } from "@material-ui/core";
  import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Redirect } from "react-router-dom";

function Login({setToken, token}) {
    const matches = useMediaQuery('(max-width: 600px)');

    const useStyle = makeStyles((theme) => ({
        container: {
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        paper: {
          width: matches ? "100%" : "70%",
          padding: theme.spacing(2.5, 2),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        },
      }));

      const classes = useStyle()

      if (token) {
          return <Redirect to="/" />
      }
      
  return (
      <Container maxWidth="sm" className={classes.container}>
        <Paper className={classes.paper} elevation={0}>
          <DonutLargeIcon fontSize="large" />
          <Typography variant="h5">Login Form</Typography>
         <LoginForm setToken={setToken} token={token}/>
        </Paper>
      </Container>
  );
}

export default Login;
