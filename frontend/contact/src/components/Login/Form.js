import { Typography, Divider, IconButton } from "@material-ui/core";
import { makeStyles, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { InputAdornment } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useFormik } from "formik";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import axios from 'axios'

const initialValues = {
  Email: "",
  Password: "",
};

// const validate = (values) => {
//   let errors = {};

//   if (!values.Email) {
//     errors.Email = "Required Field";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Email)) {
//     errors.Email = "Invalid Email Format";
//   }

//   if (!values.Password) {
//     errors.Password = "Required Field";
//   }
//   return errors;
// };

function Form({setToken}) {
  const [ViewPassword, setViewPassword] = useState(false)

  const useStyle = makeStyles(theme => ({
    form: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    div: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
    divider: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      "& hr": {
        width: "38%",
      },
    },
    google: {
      height: theme.spacing(5),
      width: theme.spacing(5),
      border: "1px solid #e0e0e0",
      alignSelf: "center"
    }
  }));

  const classes = useStyle();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      // const form = new FormData();
      // form.append("username", values.Email)
      // form.append("password", values.Password)
      const form = {"username": values.Email, "password": values.Password}
      const {data} = await axios.post("http://localhost:8000/api/login/", form)
      const {token, email} = data
      setToken(token, email)
    },
    // validate,
  });

  return (
    <>
    <form
      action="#"
      method="POST"
      className={classes.form}
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <div className={classes.div}>
        <TextField
          error={formik.touched.Email && formik.errors.Email ? true : false}
          id="email"
          name="Email"
          type="Email"
          label="Email"
          helperText={formik.touched.Email ? formik.errors.Email : null}
          value={formik.values.Email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="your-email@provider.com"
          autoComplete="current-email"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
            endAdornment:
              formik.touched.Email && formik.errors.Email ? (
                <InputAdornment position="end">
                  <ErrorOutlineOutlinedIcon color="error" />
                </InputAdornment>
              ) : undefined
          }}
          fullWidth
        />
      </div>

      <div className={classes.div}>
        <TextField
          error={
            formik.touched.Password && formik.errors.Password ? true : false
          }
          id="password"
          label="Password"
          name="Password"
          type={ViewPassword ? "text" : "password"}
          helperText={formik.touched.Password ? formik.errors.Password : null}
          value={formik.values.Password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="password"
          autoComplete="current-password"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon />
              </InputAdornment>
            ),
            endAdornment:
              formik.touched.Password && formik.errors.Password ? (
                <InputAdornment position="end">
                  <ErrorOutlineOutlinedIcon color="error" />
                </InputAdornment>
              ) : (
                <InputAdornment position="end">
                  <IconButton onClick={() => setViewPassword(!ViewPassword)}>
                  {ViewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              )   
          }}
          fullWidth
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        // disabled={formik.errors.Email || formik.errors.Password ? true : false}
      >
        Sign In
      </Button>
      <Typography variant="caption" color="textSecondary" align="center">
        <div className={classes.divider}>
          <Divider />
          <Typography variant="caption" color="textSecondary">
            Continue with
          </Typography>
          <Divider />
        </div>
      </Typography>
      <IconButton className={classes.google}>
        <Typography variant="h6">G</Typography>
      </IconButton>
      {/* <Button
        variant="outlined"
        startIcon={<FacebookIcon />}
        color="Secondary"
        disableElevation
        component="a">
        google
      </Button> */}
    </form>
    </>
  );
}

export default Form;
