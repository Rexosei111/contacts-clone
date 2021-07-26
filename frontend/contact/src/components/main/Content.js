import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography, Checkbox } from "@material-ui/core";
import AccountAvartar from "../TopNav/AccountAvartar";
import clsx from "clsx";
import Actions from "./Actions";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100, align: "center" },
  {
    id: "number",
    label: "Phone Number",
    minWidth: 170,
    align: "center",
  },
  {
    id: "job",
    label: "Job/Company",
    minWidth: 170,
    align: "center",
  },
  {
    id: "actions",
    label: "",
    minWidth: 170,
    align: "right",
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "100%",
  },
  tablehead: {
    backgroundColor: "#ffffff",
  },
  tablerow: {
    "&:hover": {
      "& span": {
        visibility: "visible",
      },
      "& div": {
        display: "none"
      },
      "& span:first-child": {
        display: "flex"
      }
    },
  },
  tablecell: {
    borderBottom: "none",
  },
  actions: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 15,
    justifyContent: "flex-end",
    height: "100%",
  },
  name: {
    display: "flex",
    alignItems: "center",
    height: 53,
    gap: 15,
  },
  checkbox: {
    width: 32,
    height: 32,
    display: "none"
  },
});

function Content({ Contacts, token }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.tablehead}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Contacts.map((contact) => {
              return (
                <TableRow
                  key={contact.id}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  className={classes.tablerow}
                >
                  <TableCell
                    className={clsx({
                      [classes.name]: true,
                      [classes.tablecell]: true,
                    })}
                    padding="normal"
                  >
                      <Checkbox className={classes.checkbox} />
                      <AccountAvartar link={contact.image} />
                    <Typography component="span" variant="body2">{`${
                      contact.first_name + " " + contact.last_name
                    }`}</Typography>
                  </TableCell>
                  <TableCell align="center" className={classes.tablecell}>
                    {contact.email}
                  </TableCell>
                  <TableCell align="center" className={classes.tablecell}>
                    0557570564
                  </TableCell>
                  <TableCell align="center" className={classes.tablecell}>
                    {contact.job}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={clsx({
                      [classes.tablecell]: true,
                    })}
                    padding="none"
                  >
                    {contact.favorite ? <Actions fav="true" Contacts={Contacts} token={token} id={contact.id}/> : <Actions Contacts={Contacts} token={token} id={contact.id}/>}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
    </Paper>
  );
}

export default Content;
