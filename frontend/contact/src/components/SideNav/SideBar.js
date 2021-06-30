import React from 'react'
import { Container, Drawer } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider } from '@material-ui/core';
import InboxIcon from "@material-ui/icons/Inbox"
import MailIcon from "@material-ui/icons/Mail"

function SideBar() {

    const drawer = (
        <div>
          <div />
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    
    return (
        <nav>
        <Hidden>
            <Drawer
                variant="temporary"
                anchor="left"
                open={false}
                onClose={()=>{}}   
            >
                {drawer}
            </Drawer>
        </Hidden>
        </nav>
    )
}

export default SideBar
