import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Toast({toastopen, settoastOpen}) {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    settoastOpen(false);
  };

  return (
    <div className={classes.root}>
      
      <Snackbar open={toastopen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" style={{fontSize: 15}}>
          Fetch Failed, Fall back contacts Loaded
        </Alert>
      </Snackbar>
      
    </div>
  );
}
