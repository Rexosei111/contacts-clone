import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 700,
    borderRadius: 5,
    backgroundColor: "#f1f3f4"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  hide: {
    display: "none"
  }
}));

export default function Search() {
  const classes = useStyles();

  const hide = useMediaQuery(theme => theme.breakpoints.down('xs'))

  return (
    <Paper component="form" className={clsx({[classes.root]: true, [classes.hide]: hide})} elevation={0}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}