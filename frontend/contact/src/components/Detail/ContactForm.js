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
    padding: "5px 0px",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
          <Grid item container spacing={2} alignItems="flex-end" wrap="nowrap">
            <Grid item>
              <AccountCircleRounded />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="first_name"
                label="First Name"
                name="first_name"
                onChange={handleChange}
                value={props?.contact.first_name}
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
          <Grid item container spacing={2} alignItems="flex-end" wrap="nowrap">
            <Grid item>
              <AccountCircleRounded style={{ opacity: "0%" }} />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="LName"
                label="Last Name"
                name="last_name"
                onChange={handleChange}
                fullWidth
                value={props?.contact.last_name}
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

          <Grid item container spacing={2} alignItems="flex-end" wrap="nowrap">
            <Grid item>
              <BusinessIcon />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="company"
                label="Company"
                name="company"
                onChange={handleChange}
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
          <Grid item container spacing={2} alignItems="flex-end" wrap="nowrap">
            <Grid item>
              <AccountCircleRounded style={{ opacity: "0%" }} />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="last Name"
                label="Job"
                name="job"
                onChange={handleChange}
                value={props?.contact.job}
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

          <Grid item container spacing={2} alignItems="flex-end" wrap="nowrap">
            <Grid item>
              <MailOutlineIcon />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="Email"
                label="Email"
                name="email"
                onChange={handleChange}
                value={props?.contact.email}
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

          <Grid item container spacing={2} alignItems="flex-end" wrap="nowrap">
            <Grid item>
              <PhoneOutlinedIcon />
            </Grid>
            <Grid item xs={10}>
              <TextField
                id="Phone"
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                value={props?.contact.phone}
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
