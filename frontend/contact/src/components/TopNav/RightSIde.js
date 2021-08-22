import React from "react";
import clsx from "clsx";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import { makeStyles } from "@material-ui/core/styles";
import AccountAvartar from "./AccountAvartar";
import { IconButton } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

function RightSIde({ email }) {
  const useStyles = makeStyles((theme) => ({
    right: {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      gap: 10,
    },

    smallBtn: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    hide: {
      display: "none",
    },
  }));

  const first = useMediaQuery("(max-width:900px)");
  const second = useMediaQuery("(max-width:800px)");
  const third = useMediaQuery("(max-width:700px)");
  const fourth = useMediaQuery(theme => theme.breakpoints.down('xs'));


  const classes = useStyles();
  return (
    <div className={clsx(classes.right)}>
      <IconButton
        className={clsx({ [classes.smallBtn]: true, [classes.hide]: first })}
      >
        <HelpOutlineIcon fontSize="small" color="action" />
      </IconButton>
      <IconButton
        className={clsx({ [classes.smallBtn]: true, [classes.hide]: second })}
      >
        <SettingsOutlinedIcon fontSize="small" color="action" />
      </IconButton>
      <IconButton
        className={clsx({ [classes.smallBtn]: true, [classes.hide]: third })}
      >
        <AppsIcon fontSize="small" color="action" />
      </IconButton>
      <IconButton
        className={clsx({ [classes.smallBtn]: true, [classes.hide]: !fourth })}
      >
        <SearchIcon color="action" />
      </IconButton>
      <IconButton className={classes.smallBtn}>
        <AccountAvartar email={email} />
      </IconButton>
    </div>
  );
}

export default RightSIde;
