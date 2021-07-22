import React from "react";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";

function Actions() {
  const useStyles = makeStyles({
    actions: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 15,
      justifyContent: "flex-end",
      height: "100%",
      visibility: "hidden"
    },
  });

  const classes = useStyles();
  return (
    <span className={classes.actions}>
      <StarOutlineIcon fontSize="small" />
      <EditOutlinedIcon fontSize="small" />
      <MoreVertIcon fontSize="small" />
    </span>
  );
}

export default Actions;
