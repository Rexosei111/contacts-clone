import React, { useState } from "react";
import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider } from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";
import AssistantOutlinedIcon from "@material-ui/icons/AssistantOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import AssignmentReturnedOutlinedIcon from "@material-ui/icons/AssignmentReturnedOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Collapse from "@material-ui/core/Collapse";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

function SideBar({ fullSide, Contacts, setfullSide }) {
  const history = useHistory();

  const [label, setlabel] = useState(true);
  const useStyle = makeStyles((theme) => ({
    paper: {
      width: 280,
      boxSizing: "border-box",
      paddingRight: 10,
      height: "100vh",
      position: "fixed",
      left: fullSide ? 0 : -280,
      // backgroundColor: "#000000",
      zIndex: 20
    },
    create: {
      height: 50,
      borderRadius: 40,
      backgroundColor: "#ffffff",
      color: "#5f6368",
      margin: "20px 5px",
      padding: "0 25px",
    },
    listitem: {
      borderRadius: "0 30px 30px 0",
      padding: "5px 25px",
      "&.active": {
        backgroundColor: "#e8f0fe",
        color: "#1967d2",
      },
    },
    secondaryAction: {
      color: "#1967d2",
    },
    actionIcons: {
      color: "#5f6368",
    },
  }));
  const classes = useStyle();

  const handleCreate = () => {
    history.push("/new");
  };

  const handleLabel = () => {
    setlabel(!label);
  };
  return (
    <Paper className={classes.paper} component="aside" elevation={0}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        className={classes.create}
        elevation={0}
        onClick={handleCreate}
      >
        Create Contact
      </Button>
      <List dense={true} className={classes.list}>
        <ListItem
          button
          component={NavLink}
          exact
          to="/"
          className={classes.listitem}
        >
          <ListItemIcon>
            <PersonOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Contact</ListItemText>
          <ListItemSecondaryAction className={classes.secondaryAction}>
            {Contacts.length}
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/frequent"
          className={classes.listitem}
        >
          <ListItemIcon>
            <HistoryIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Frequently Contacted</ListItemText>
        </ListItem>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <AssistantOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Merge and Fix</ListItemText>
        </ListItem>
      </List>
      <Divider orientation="horizontal" />
      <List dense={true} className={classes.list}>
        <ListItem
          button
          component="a"
          href="#"
          className={classes.listitem}
          onClick={handleLabel}
        >
          <ListItemIcon>
            {label ? (
              <ExpandLessOutlinedIcon fontSize="small" />
            ) : (
              <ExpandMoreOutlinedIcon fontSize="small" />
            )}
          </ListItemIcon>
          <ListItemText>Label</ListItemText>
        </ListItem>
        <Collapse in={label} timeout="auto" unmountOnExit>
          <List disablePadding dense={true}>
            <ListItem
              button
              component="a"
              href="#"
              className={classes.listitem}
            >
              <ListItemIcon>
                <LabelOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="ICE" />
              <EditOutlinedIcon
                fontSize="small"
                className={classes.actionIcons}
              />
              <DeleteOutlineOutlinedIcon
                fontSize="small"
                className={classes.actionIcons}
              />
            </ListItem>
            <ListItem
              button
              component="a"
              href="#"
              className={classes.listitem}
            >
              <ListItemIcon>
                <AddIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Create Label</ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List dense={true} className={classes.list}>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <PublishOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Import</ListItemText>
        </ListItem>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <BackupOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Export</ListItemText>
        </ListItem>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <PrintOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Print</ListItemText>
        </ListItem>
      </List>
      <Divider orientation="horizontal" />
      <List dense={true} className={classes.list}>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <AssignmentReturnedOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Other Contacts</ListItemText>
        </ListItem>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Bin</ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}
export default SideBar;
