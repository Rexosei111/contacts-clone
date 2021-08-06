import React from "react";
import {
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import AccountCircleRounded from "@material-ui/icons/AccountCircleRounded";
import CloseIcon from "@material-ui/icons/Close";
import BusinessIcon from "@material-ui/icons/Business";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "5px",
    // border: "1px solid #e0e0e0",
    maxWidth: "570px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    color: "#9e9e9e",
  },
  close: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: "#9e9e9e",
  },
}));

function ContactForm(props) {
  const clasess = useStyles();

  return (
    <Paper className={clasess.paper} elevation={0}>
      <form method="post">
        <Grid
          container
          spacing={1}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item container spacing={2} alignItems="flex-end">
            <Grid item>
              <AccountCircleRounded />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="first_name"
                label="First Name"
                value={props.contact.first_name}
                fullWidth
                InputLabelProps={{
                  style: { fontSize: 14 },
                }}
              />
            </Grid>
            <Grid item>
              <IconButton className={clasess.close}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item container spacing={2} alignItems="flex-end">
            <Grid item>
              <AccountCircleRounded style={{ opacity: "0%" }} />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="LName"
                label="Last Name"
                fullWidth
                value={props.contact.last_name}
                InputLabelProps={{
                  style: { fontSize: 14 },
                }}
              />
            </Grid>
            <Grid item>
              <IconButton
                className={clasess.close}
                style={{ visibility: "hidden" }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>

          <Grid item container spacing={2} alignItems="flex-end">
            <Grid item>
              <BusinessIcon />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="company"
                label="Company"
                fullWidth
                InputLabelProps={{
                  style: { fontSize: 14 },
                }}
              />
            </Grid>
            <Grid item>
              <IconButton className={clasess.close}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item container spacing={2} alignItems="flex-end">
            <Grid item>
              <AccountCircleRounded style={{ opacity: "0%" }} />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="last Name"
                label="Job"
                value={props.contact.job}
                fullWidth
                InputLabelProps={{
                  style: { fontSize: 14 },
                }}
              />
            </Grid>
            <Grid item>
              <IconButton
                className={clasess.close}
                style={{ visibility: "hidden" }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>

          <Grid item container spacing={2} alignItems="flex-end">
            <Grid item>
              <MailOutlineIcon />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="Email"
                label="Email"
                value={props.contact.email}
                fullWidth
                InputLabelProps={{
                  style: { fontSize: 14 },
                }}
              />
            </Grid>
            <Grid item>
              <IconButton className={clasess.close}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>

          <Grid item container spacing={2} alignItems="flex-end">
            <Grid item>
              <PhoneOutlinedIcon />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="Phone"
                label="Phone Number"
                value={props.contact.phone}
                fullWidth
                InputLabelProps={{
                  style: { fontSize: 14 },
                }}
              />
            </Grid>
            <Grid item>
              <IconButton className={clasess.close}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default ContactForm;
