import React from "react";
import RegistrationForm from "./RegistrationForm";
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
    Container,
    Typography,
    Paper,
  } from "@material-ui/core";
  import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Link, Redirect } from "react-router-dom";

function Register({setToken, token}) {
    const matches = useMediaQuery('(max-width: 600px)');

    const useStyle = makeStyles((theme) => ({
        container: {
          height: "100vh",
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
          <Typography variant="h5">Registration Form</Typography>
         <RegistrationForm setToken={setToken} token={token}/>
         <Link to="/login" style={{alignSelf: "flex-start"}}>Already have an account?</Link>
        </Paper>
      </Container>
  );
}

export default Register;
