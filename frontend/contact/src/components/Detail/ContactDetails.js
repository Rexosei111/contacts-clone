import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import CakeIcon from "@material-ui/icons/Cake";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "10px 15px",
    border: "1px solid #e0e0e0",
    borderRadius: theme.spacing(1),
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  head: {
    fontSize: theme.spacing(2),
  },
}));

const icons = {
  email: <MailOutlineIcon fontSize="small" />,
  date_of_birth: <CakeIcon fontSize="small" />,
  phone: <CallOutlinedIcon />,
};

function ContactDetails({ contact }) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography variant="h6" className={classes.head}>
        Contact Details
      </Typography>
      <List disablePadding>
        {Object.entries(contact).map(
          ([key, value]) =>
            value !== null &&
            icons[key] && (
              <ListItem dense disableGutters>
                <ListItemIcon>{icons[key]}</ListItemIcon>
                <Typography color="primary" variant="body2">
                  {value}
                </Typography>
              </ListItem>
            )
        )}
      </List>
    </Paper>
  );
}

export default ContactDetails;
