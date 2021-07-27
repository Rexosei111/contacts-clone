import React from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function AccountAvartar({ email, link }) {
  const classes = useStyles();

  return (
    <div>
      <Avatar
        alt={email?.toUpperCase()}
        src={String(link)}
        className={classes.small}
      />
    </div>
  );
}

export default AccountAvartar;
