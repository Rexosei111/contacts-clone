import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButton({setuserImage}) {
  const classes = useStyles();

  const userImageHandler = (e) => {
    console.log(e.target.value)
    setuserImage(e.target.value)
}

  return (
    <div className={classes.root}>
      {/* <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label> */}
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={userImageHandler}/>
      <label htmlFor="icon-button-file">
        <IconButton color="secondary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}
