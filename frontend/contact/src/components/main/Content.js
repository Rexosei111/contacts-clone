import React, { useState } from "react";
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
import SelectedHeader from "./SelectedHeader";
import { useHistory } from "react-router"
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    // backgroundColor: "#000000"
  },
  container: {
    maxHeight: "100%",
    overflowX: "hidden"
  },
  tablehead: {
    backgroundColor: "#ffffff",
  },
  tablerow: {
    "&:hover": {
      "& span": {
        visibility: "visible",
      },
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
    gap: 20,
  },
  checkbox: {
    width: 32,
    height: 32,
  },
  hide: {
    display: "none"
  },
  
});

function Content({ Contacts, token }) {
  const [Selected, setSelected] = useState([]);
  const [hoveredEl, setHoveredEl] = useState("");
  const history = useHistory();
  const matches = useMediaQuery('(max-width:1290px)');
  const phN = useMediaQuery('(max-width:1050px)');
  const mail = useMediaQuery('(max-width:700px)')
  const act = useMediaQuery('(max-width:600px)')


  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "email", label: "Email", minWidth: 100, align: "center", hide: mail },
    {
      id: "number",
      label: "Phone Number",
      minWidth: 170,
      align: "center",
      hide: phN
    },
    {
      id: "job",
      label: "Job/Company",
      minWidth: 170,
      align: "center",
      hide: matches
    },
    {
      id: "actions",
      label: "",
      minWidth: 170,
      align: "right",
    },
    
  ];
  

  const handleCheck = (e) => {
    const checkId = e.target.value;
    if (Selected.includes(checkId)) {
      setSelected((prevState) => prevState.filter((s) => s !== checkId));
    } else {
      setSelected((prevState) => [...prevState, checkId]);
    }
  };

  const clearChecked = () => {
    setSelected([]);
  };

  const handleHover = (event) => {
    const { id } = event.currentTarget.dataset;
    setHoveredEl(id);
  };

  const handleLeave = () => {
    setHoveredEl("");
  };

  const viewDetail = (e, id) => {
    history.push(`/contacts/${id}`);
  };

  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          {Selected.length > 0 ? (
            <SelectedHeader
              clearChecked={clearChecked}
              Selectedlength={Selected.length}
              Contactlength={Contacts.length}
            />
          ) : (
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    className={clsx({[classes.tablehead]: true, [classes.hide]: column.hide})}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {Contacts.map((contact) => {
              return (
                <TableRow
                  key={contact.id}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  data-id={contact.id}
                  className={classes.tablerow}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={(e) => viewDetail(e, contact.id)}
                >
                  <TableCell
                    className={clsx({
                      [classes.name]: true,
                      [classes.tablecell]: true,
                    })}
                    style={{minWidth: `${act ? "600px" : "inherit"}`}}
                  >
                    {hoveredEl === String(contact.id) ||
                    Selected.includes(String(contact.id)) ? (
                      <Checkbox
                        color="primary"
                        value={contact.id}
                        onClick={(e) => e.stopPropagation()}
                        onChange={handleCheck}
                        className={classes.checkbox}
                        checked={Selected.includes(String(contact.id))}
                      />
                    ) : (
                      <AccountAvartar
                        link={contact.imageURL}
                        size="small"
                        email={contact.first_name}
                      />
                    )}
                    <Typography component="span" variant="body2">{`${
                      contact.first_name + " " + contact.last_name
                    }`}</Typography>
                  </TableCell>
                  <TableCell align="center" className={clsx({[classes.tablecell]: true, [classes.hide]: mail})}>
                    {contact.email}
                  </TableCell>
                  <TableCell align="center" className={clsx({[classes.tablecell]: true, [classes.hide]: phN})}>
                    {contact.phone}
                  </TableCell>
                  <TableCell align="center" className={clsx({[classes.tablecell]: true, [classes.hide]: matches})}>
                    {contact.job}
                  </TableCell>
                  <TableCell
                    align="right"
                    className={clsx({
                      [classes.tablecell]: true,
                      [classes.hide]: act
                    })}
                    padding="none"
                  >
                    {contact.favorite ? (
                      <Actions
                        fav="true"
                        Contacts={Contacts}
                        token={token}
                        id={contact.id}
                      />
                    ) : (
                      <Actions
                        Contacts={Contacts}
                        token={token}
                        id={contact.id}
                      />
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Content;
