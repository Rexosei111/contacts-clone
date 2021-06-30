import React, { useState } from "react";
import { Button, IconButton } from "@material-ui/core";
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
import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import Collapse from "@material-ui/core/Collapse";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function SideBar() {
  const [label, setlabel] = useState(true);
  const useStyle = makeStyles((theme) => ({
    paper: {
      width: 280,
      height: "100vh",
      position: "fixed",
    },
    create: {
      height: 50,
      borderRadius: 40,
      backgroundColor: "#ffffff",
      color: "#5f6368",
      margin: "10px 5px",
      padding: "0 25px",
    },
    listitem: {
      borderRadius: "0 30px 30px 0",
      padding: "5px 25px",
    },
  }));
  const classes = useStyle();

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
      >
        Create Contact
      </Button>
      <List dense={true} className={classes.list}>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <PersonOutlineIcon />
          </ListItemIcon>
          <ListItemText>Contacts</ListItemText>
        </ListItem>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText>Frequently Contacted</ListItemText>
        </ListItem>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <AssistantOutlinedIcon />
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
            {label ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
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
                <LabelOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="ICE" />
              <EditOutlinedIcon />
              <DeleteOutlineOutlinedIcon />
            </ListItem>
            <ListItem
              button
              component="a"
              href="#"
              className={classes.listitem}
            >
              <ListItemIcon>
                <AddIcon />
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
            <PublishOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Import</ListItemText>
        </ListItem>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <BackupOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Export</ListItemText>
        </ListItem>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <PrintOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Print</ListItemText>
        </ListItem>
      </List>
      <Divider orientation="horizontal" />
      <List dense={true} className={classes.list}>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <AssignmentReturnedOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Other Contacts</ListItemText>
        </ListItem>
        <ListItem button component="a" href="#" className={classes.listitem}>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Bin</ListItemText>
        </ListItem>
        </List>
    </Paper>
  );
}
export default SideBar;
