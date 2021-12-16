import React, { useEffect, useState } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Side } from "../Layout";
import { Button, IconButton, Paper } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AccountAvartar from "../Detail/AccountAvartar";
import LabelOutlined from "@material-ui/icons/LabelOutlined";
import { Divider } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ImageUploadBtn from "../Detail/ImageUploadBtn";
import ContactForm from "../Detail/ContactForm";
import { useMediaQuery } from "@material-ui/core";

function NewContact(props) {
  const { fullSide, Contacts, handleContacts } = React.useContext(Side);
  const [contact, setContact] = useState({});
  const history = useHistory();
  const matches = useMediaQuery("(max-width: 840px)");

  const useStyles = makeStyles((theme) => ({
    container: {
      marginLeft: fullSide ? 265 : 0,
      height: "90vh",
      backgroundColor: "#ffffff",
      padding: "0px 10px",
      overflowY: "auto",
    },
    paper: {
      width: "100%",
      padding: "20px 5px",
      display: "flex",
      justifyContent: matches ? "space-between" : "initial",
      gap: matches ? 15 : 25,
    },
    name: {
      height: "100%",
      display: "flex",
      flexDirection: matches ? "column" : "row",
      alignItems: "center",
      gap: matches ? 10 : 25,
    },
    info: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: matches ? 5 : 10,
    },
    mainInfo: {
      padding: "8px 5px",
      width: "100%",
      overflowY: "auto",
    },
    label: {
      height: 35,
      width: 35,
      border: "1px solid #e0e0e0",
    },
    actions: {
      display: "flex",
      alignItems: matches ? "flex-start" : "flex-end",
      height: "100%",
      marginLeft: matches ? null : "auto",
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
  const [imageURL, setimageURL] = useState();

  useEffect(() => {
    let formData = new FormData();
    formData.append("file", image);
    if (image !== null) {
      axios({
        method: "post",
        url: "https://liel2c.deta.dev/upload/",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${props.token}`,
        },
      })
        .then((response) => setimageURL(response.data.link))
        .catch((err) => console.log(err));
    }
  }, [props.token, image]);

  const handleSubmit = (e) => {
    axios({
      method: "post",
      url: "//rexo.pythonanywhere.com/api/contacts/create/",
      data: { ...contact, imageURL: imageURL },
      headers: {
        Authorization: `Token ${props.token}`,
      },
    })
      .then((response) => {
        handleContacts([...Contacts, response.data]);
        setContact({});
        history.push(`/contacts/${response.data.id}`);
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
            <AccountAvartar size="xxlarge" link={imageURL} />
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
      <Container className={classes.mainInfo}>
        <ContactForm contact={contact} setContact={setContact} image={image} />
      </Container>
    </main>
  );
}

export default NewContact;
