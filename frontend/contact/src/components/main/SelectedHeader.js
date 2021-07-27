import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Typography } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import MergeTypeIcon from "@material-ui/icons/MergeType";

const useStyles = makeStyles({
  tablehead: {
    backgroundColor: "#ffffff",
  },
  row: {
    width: "inherit",
    backgroundColor: "#ef43dc",
  },
  select: {
    display: "flex",
    alignItems: "center",
    height: 57,
    gap: 10,
  },
  indeterminate: {
    width: 31,
    height: 31,
  },
});

function SelectedHeader({ Selectedlength, Contactlength, clearChecked }) {
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow className={classes.row}>
        <TableCell style={{ minWidth: 170 }} className={classes.select}>
          <Checkbox
            className={classes.indeterminate}
            color="primary"
            checked={Selectedlength === Contactlength}
            indeterminate={Selectedlength !== Contactlength}
            inputProps={{ "aria-label": "Checked checkbox" }}
            onChange={clearChecked}
          />
          {Selectedlength > 1 ? <MergeTypeIcon color="primary" /> : null}
          <LabelOutlinedIcon color="primary" />
        </TableCell>
        <TableCell align="center" style={{ minWidth: 100 }}></TableCell>
        <TableCell align="center" style={{ minWidth: 170 }}></TableCell>
        <TableCell align="center" style={{ minWidth: 170 }}></TableCell>
        <TableCell align="right" style={{ minWidth: 170 }}>
          <Typography color="primary">{Selectedlength} selected</Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default SelectedHeader;
