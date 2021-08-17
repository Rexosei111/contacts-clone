import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Side } from "../Layout";
import { Button, IconButton, Paper} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AccountAvartar from "../Detail/AccountAvartar";
import LabelOutlined from "@material-ui/icons/LabelOutlined";
import { Divider } from "@material-ui/core";
import { useHistory} from "react-router-dom";
import axios from "axios";
import ImageUploadBtn from "../Detail/ImageUploadBtn";
import ContactForm from "../Detail/ContactForm";

function NewContact(props) {
  const { fullSide, Contacts, handleContacts } = React.useContext(Side);
  const [contact, setContact] = useState({});
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    container: {
      marginLeft: fullSide ? 265 : 0,
      height: "90vh",
      padding: "10px 20px",
      backgroundColor: "#ffffff",
    },
    paper: {
      width: "100%",
      height: "35%",
      padding: "15px",
      display: "flex",
      gap: 25,
    },
    name: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      gap: 25,
    },
    info: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 10,
    },
    label: {
      height: 35,
      width: 35,
      border: "1px solid #e0e0e0",
    },
    actions: {
      display: "flex",
      alignItems: "flex-end",
      height: "100%",
      marginLeft: "auto",
    },
    actionBtn: {
      display: "flex",
      alignItems: "center",
      gap: 5,
    },
    backBtn: {
      height: theme.spacing(4),
      width: theme.spacing(4),
    },
  }));

  const prevPage = () => {
    history.goBack();
  };

  const [image, setimage] = useState(null);
  const [imageURL, setimageURL] = useState()

  useEffect(() => {
    let formData = new FormData();
    formData.append("image", image);
    axios({
      method: "post",
      url: "http://localhost:8000/api/contacts/images/upload/",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${props.token}`,
      },
    })
    .then(response => setimageURL(response.data.image))
    .catch(err => console.log(err))
    
  }, [props.token,image]);

  const handleSubmit = (e) => {

    axios({
      method: "post",
      url: "http://localhost:8000/api/contacts/create/",
      data: {...contact, "imageURL": imageURL},
      headers: {
        // "Content-Type": "Application/json",
        Authorization: `Token ${props.token}`,
      },
    })
      .then((response) => {
        handleContacts([...Contacts, response.data]);
        setContact({});
      })
      .catch((err) => {
        console.log(err);
        setContact({});
      });
  };

  const classes = useStyles();
  return (
    <main className={classes.container}>
      <Paper className={classes.paper} elevation={0}>
        <IconButton className={classes.backBtn}>
          <ArrowBackIcon onClick={prevPage} />
        </IconButton>
        <div className={classes.name}>
          <div style={{ position: "relative" }}>
            <AccountAvartar
              size="xxlarge"
              link={imageURL}
              //   email={contact.first_name}
            />
            <ImageUploadBtn setimage={setimage} />
          </div>
          <div className={classes.info}>
            <IconButton className={classes.label}>
              <LabelOutlined color="primary" fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </Paper>
      <Divider light />
      <div
        style={{
          padding: "8px 60px",
          // height: "57vh",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <ContactForm contact={contact} setContact={setContact} image={image} />
      </div>
    </main>
  );
}

export default NewContact;
