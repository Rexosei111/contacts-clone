import React, { useContext } from "react";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Side } from "../Layout";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  xxlarge: {
    width: theme.spacing(21),
    height: theme.spacing(21),
  },
  xlarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  xxlargeFont: {
    fontSize: theme.spacing(10),
  },
  xlargeFont: {
    fontSize: theme.spacing(4),
  },
  av: {
    backgroundColor: "#ef43b2",
  },
}));

function AccountAvartar({ email, link, size = "small" }) {
  const { colorCodes } = useContext(Side);

  const getColorCode = () => {
    const letter = email?.toUpperCase()[0];
    return colorCodes[letter];
  };

  const classes = useStyles();

  return (
    <div>
      <Avatar
        alt={email?.toUpperCase()}
        src={String(link)}
        className={clsx({
          [classes[size]]: true,
          [classes.xxlargeFont]: size === "xxlarge" ? true : false,
          [classes.xlargeFont]: size === "xlarge" ? true : false,
        })}
        style={{ backgroundColor: getColorCode() }}
      />
    </div>
  );
}

export default AccountAvartar;
