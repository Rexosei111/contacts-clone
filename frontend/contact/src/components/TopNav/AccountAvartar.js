import React, {useContext} from "react";
import { Avatar} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {Side} from '../Layout'


const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  xxlarge: {
    width: theme.spacing(21),
    height: theme.spacing(21),
  },
  fallback: {
    fontSize: theme.spacing(10),
  },
  av: {
    backgroundColor: "#ef43b2"
  },
  
}));


function AccountAvartar({ email, link, size="small" }) {

  const {colorCodes} = useContext(Side)

  const getColorCode = () => {
    const letter = email?.toUpperCase()[0]
    return (
      colorCodes[letter]
    )
  }

  const classes = useStyles();


  return (
    <div>
      <Avatar
        alt={email?.toUpperCase()}
        src={String(link)}
        className={clsx({[classes[size]] : true, [classes.fallback] : size === "xxlarge" ? true : false})}
        style={{backgroundColor: getColorCode()}}
      />
    </div>
  );
}

export default AccountAvartar;
