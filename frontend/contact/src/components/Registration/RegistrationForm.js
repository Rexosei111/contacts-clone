import { Typography, Divider, IconButton } from "@material-ui/core";
import { makeStyles, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { InputAdornment } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useFormik } from "formik";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import AccountCircleRounded from "@material-ui/icons/AccountCircleRounded";
import { useHistory } from "react-router";

const initialValues = {
  username: "",
  Email: "",
  Password: "",
  password2: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Required Field";
  }

  if (
    values.Email.length > 0 &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Email)
  ) {
    errors.Email = "Invalid Email Format";
  }

  //   if (!values.Email) {
  //     errors.Email = "Required Field";
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.Email)) {
  //     errors.Email = "Invalid Email Format";
  //   }

  if (!values.Password) {
    errors.Password = "Required Field";
  }

  if (!values.password2) {
    errors.password2 = "Required Field";
  } else if (
    values.Password.length > 0 &&
    values.password2.length > 0 &&
    values.password2 !== values.Password
  ) {
    errors.password2 = "Passwords Do not match";
  }
  return errors;
};

function RegistrationForm({ setToken }) {
  const [ViewPassword, setViewPassword] = useState(false);
  const history = useHistory();

  const useStyle = makeStyles((theme) => ({
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
      alignSelf: "center",
    },
  }));

  const classes = useStyle();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const form = {
        username: values.username,
        email: values.Email,
        password: values.Password,
        password2: values.password2,
      };
      axios({
        method: "POST",
        url: "//rexo.pythonanywhere.com/api/register/",
        data: form,
      })
        .then((response) => history.push("/login"))
        .catch((err) => console.log(err));
    },
    validate,
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
            error={
              formik.touched.username && formik.errors.username ? true : false
            }
            id="username"
            name="username"
            type="text"
            label="Username"
            helperText={formik.touched.username ? formik.errors.username : null}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="username"
            autoComplete="current-user"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleRounded color="action" />
                </InputAdornment>
              ),
              endAdornment:
                formik.touched.Email && formik.errors.Email ? (
                  <InputAdornment position="end">
                    <ErrorOutlineOutlinedIcon color="error" />
                  </InputAdornment>
                ) : undefined,
            }}
            fullWidth
          />
        </div>

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
                  <MailOutlineIcon color="action" />
                </InputAdornment>
              ),
              endAdornment:
                formik.touched.Email && formik.errors.Email ? (
                  <InputAdornment position="end">
                    <ErrorOutlineOutlinedIcon color="error" />
                  </InputAdornment>
                ) : undefined,
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
                  <LockOpenIcon color="action" />
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
                      {ViewPassword ? (
                        <VisibilityOffIcon color="action" />
                      ) : (
                        <VisibilityIcon color="action" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
            }}
            fullWidth
          />
        </div>
        <div className={classes.div}>
          <TextField
            error={
              formik.touched.password2 && formik.errors.password2 ? true : false
            }
            id="password2"
            label="confirm password"
            name="password2"
            type={ViewPassword ? "text" : "password"}
            helperText={
              formik.touched.password2 ? formik.errors.password2 : null
            }
            value={formik.values.password2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="confirm password"
            autoComplete="current-password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon color="action" />
                </InputAdornment>
              ),
              endAdornment:
                formik.touched.password2 && formik.errors.password2 ? (
                  <InputAdornment position="end">
                    <ErrorOutlineOutlinedIcon color="error" />
                  </InputAdornment>
                ) : (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setViewPassword(!ViewPassword)}>
                      {ViewPassword ? (
                        <VisibilityOffIcon color="action" />
                      ) : (
                        <VisibilityIcon color="action" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
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
          Sign Up
        </Button>
        {/* <Typography variant="caption" color="textSecondary" align="center">
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
        </IconButton> */}
      </form>
    </>
  );
}

export default RegistrationForm;
