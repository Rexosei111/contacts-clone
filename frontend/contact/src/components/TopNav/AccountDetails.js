import React, { useState } from "react";
import {
  Popover,
  Typography,
  Button,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import AccountAvartar from "./AccountAvartar";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    width: "100%",
    padding: 20,
  },
  manage: {
    borderRadius: 20,
    textTransform: "capitalize",
    fontSize: 12,
    fontWeight: "bold",
  },
  Add: {
    textTransform: "capitalize",
    fontSize: "13",
    fontWeight: 600,
    border: "none",
    borderRadius: 0,
    height: 50,
  },
  signOutContainer: {
    display: "grid",
    placeContent: "center",
    height: 60,
  },
  signOut: {
    textTransform: "capitalize",
    fontSize: 13,
    fontWeight: "bold",
  },
}));

function AccountDetails({ anchorEl, setAnchorEl, email, setToken }) {
  const matches = useMediaQuery("(max-width: 400px)");
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setToken(null);
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
  };
  const open = Boolean(anchorEl);

  const classes = useStyles();

  return (
    <Container className={classes.popover}>
      <Popover
        id="simple-popover"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <div className={classes.info}>
          <AccountAvartar email={email} size="xlarge" />
          <div style={{ textAlign: "center" }}>
            <Typography variant="body1">Samuel Kyei</Typography>
            <Typography variant="body2" color="textSecondary">
              {email}
            </Typography>
          </div>
          <Button variant="outlined" className={classes.manage}>
            Manage your Account
          </Button>
        </div>
        <Divider light />
        <Button
          fullWidth
          variant="outlined"
          startIcon={<PersonAddIcon fontSize="small" color="action" />}
          className={classes.Add}
          style={{ width: matches ? "90vw" : 350 }}
        >
          Add another account
        </Button>
        <Divider light />
        <div className={classes.signOutContainer}>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            className={classes.signOut}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        </div>
        <Divider light />
      </Popover>
    </Container>
  );
}

export default AccountDetails;
