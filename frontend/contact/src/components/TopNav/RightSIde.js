import React from "react";
import clsx from 'clsx';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import { makeStyles } from '@material-ui/core/styles'
import AccountAvartar from "./AccountAvartar";
import { IconButton } from "@material-ui/core";

function RightSIde() {
    const useStyles = makeStyles(theme => ({
        right: {
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            gap: "20px"
        },

        smallBtn: {
          width: theme.spacing(5),
          height: theme.spacing(5)
        }
    }))
    const classes = useStyles()
  return (
    <div className={clsx(classes.right)}>
      <HelpOutlineIcon />
      <SettingsOutlinedIcon />
        <IconButton>
            <AppsIcon />
        </IconButton>
        <IconButton className={classes.smallBtn}>
          <AccountAvartar />
        </IconButton>
    </div>
  );
}

export default RightSIde;
