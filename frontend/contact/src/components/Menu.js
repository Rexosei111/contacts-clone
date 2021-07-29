import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import AssignmentReturnedOutlinedIcon from "@material-ui/icons/AssignmentReturnedOutlined";

import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";

import PrintOutlined from "@material-ui/icons/PrintOutlined";

function MoreMenu() {
  const [anchorEl, setanchorEl] = useState(null);

  const handleClick = (e) => {
    setanchorEl(e.currentTarget);
    e.stopPropagation();
  };

  const handleClose = (e) => {
    setanchorEl(null);
    e.stopPropagation();
  };
  return (
    <div>
      <IconButton
        aria-controls="more-options"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <Menu
        container={document.body}
        id="more-options"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PrintOutlined fontSize="small" />
          </ListItemIcon>
          <ListItemText>Print</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BackupOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Export</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AssignmentReturnedOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Hide from Contacts</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MoreMenu;
