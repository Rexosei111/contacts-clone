import React from "react";
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    display: "none",
  },
  imageUploader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10
  },
  btn: {
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  }
});

function ImageUploadBtn(props) {
  const classes = useStyles();

  const handleChange = (e) => {
    props.setimage(e.target.files[0])
  }

  return (
    <div className={classes.imageUploader}> 
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        onChange={handleChange}
        type="file"
      />
      <label htmlFor="icon-button-file">
        <IconButton
          aria-label="upload picture"
          component="span"
          className={classes.btn}
        >
          <AddAPhotoOutlinedIcon style={{ color: "#ffffff"}} />
        </IconButton>
      </label>
    </div>
  );
}

export default ImageUploadBtn;
