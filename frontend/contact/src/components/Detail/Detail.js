import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Side } from "../Layout";
import {
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AccountAvartar from "./AccountAvartar";
import LabelOutlined from "@material-ui/icons/LabelOutlined";
import { Divider } from "@material-ui/core";
import StarOutline from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import Menu from "../Menu";
import { useHistory, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import ContactDetails from "./ContactDetails";
import CloseIcon from "@material-ui/icons/Close";
import EditOutlined from "@material-ui/icons/EditOutlined";
import ImageUploadBtn from "./ImageUploadBtn";
import ContactForm from "./ContactForm";
import Fab from "@material-ui/core/Fab";
import clsx from "clsx";

function Detail(props) {
  const query = new URLSearchParams(useLocation().search);

  const { id } = useParams();
  const [Edit, setEdit] = useState(query.get("edit"));
  const history = useHistory();

  const { fullSide, Contacts, handleContacts } = React.useContext(Side);

  const [contact, setContact] = useState({});

  const [Isfav, setIsFav] = useState();

  const [image, setimage] = useState(null);
  const [imageURL, setimageURL] = useState(null);

  const matches = useMediaQuery("(max-width: 840px)");

  const useStyles = makeStyles((theme) => ({
    container: {
      marginLeft: fullSide ? 265 : 0,
      height: "90vh",
      backgroundColor: "ffffff",
      padding: "0px 10px",
      overflowY: "auto",
    },
    paper: {
      width: "100%",
      padding: "5px 0px",
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

    edit: {
      display: matches ? "none" : null,
    },
    mainInfo: {
      padding: "8px 5px",
      width: "100%",
      overflowY: "auto",
    },
    fab: {
      position: "fixed",
      visibility: "hidden",
      width: theme.spacing(6),
      height: theme.spacing(6),
      bottom: 10,
      right: 10,
    },
    show: {
      visibility: "visible",
    },
  }));

  const prevPage = () => {
    history.goBack();
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/api/contacts/${id}/`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${props.token}`,
      },
    })
      .then((res) => setContact(res.data))
      .catch((err) => console.log(err));
  }, [id, props.token]);

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
      .then((response) => setimageURL(response.data.image))
      .catch((err) => console.log(err));
  }, [props.token, image]);

  useEffect(() => {
    setIsFav(contact.favorite);
  }, [contact]);

  const handleFavorite = (e) => {
    setIsFav(!Isfav);
    axios({
      method: "PATCH",
      url: `http://localhost:8000/api/contacts/${id}/fav/`,
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${props.token}`,
      },
    }).then(() => {
      handleContacts(
        Contacts.map((contact) => {
          if (contact.id === id) {
            return { ...contact, favorite: !contact.favorite };
          } else {
            return { ...contact };
          }
        })
      );
    });
  };

  const handleEdit = () => {
    history.push("/contacts/" + contact.id + "?edit=1");
    setEdit(1);
  };

  const handleSubmit = (e) => {
    axios({
      method: "PATCH",
      url: `http://localhost:8000/api/contacts/${contact.id}/update/`,
      data: { ...contact, imageURL: imageURL || contact.imageURL },
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Token ${props.token}`,
      },
    })
      .then((response) => {
        setContact((prevState) => ({
          ...prevState,
          ...response.data,
        }));
        setEdit(0);
        history.push(`/contacts/${contact.id}`);
      })
      .catch((err) => {
        console.log(err);
        setContact({});
      });
  };
  const classes = useStyles();

  return (
    <Paper component="main" className={classes.container} elevation={0}>
      <Container className={classes.paper}>
        {Edit ? (
          <IconButton className={classes.backBtn} onClick={() => setEdit(0)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        ) : (
          <IconButton className={classes.backBtn} onClick={prevPage}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <div className={classes.name}>
          <div style={{ position: "relative" }}>
            <AccountAvartar
              size="xxlarge"
              link={imageURL ? imageURL : contact.imageURL}
              email={contact.first_name}
            />
            {Edit ? <ImageUploadBtn setimage={setimage} /> : null}
          </div>
          <div className={classes.info}>
            {contact.first_name && (
              <Typography variant="h5" style={{ alignSelf: "center" }}>{`${
                contact?.first_name + " " + contact?.last_name
              }`}</Typography>
            )}
            <Typography variant="h6">{contact.job}</Typography>
            <IconButton className={classes.label}>
              <LabelOutlined color="primary" fontSize="small" />
            </IconButton>
          </div>
        </div>
        <div className={classes.actions}>
          {Edit ? (
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={handleSubmit}
            >
              Save
            </Button>
          ) : (
            <div className={classes.actionBtn}>
              {Isfav ? (
                <StarIcon
                  fontSize="small"
                  color="primary"
                  onClick={handleFavorite}
                />
              ) : (
                <StarOutline fontSize="small" onClick={handleFavorite} />
              )}
              <Menu
                Contacts={Contacts}
                handleContacts={handleContacts}
                id={id}
                token={props.token}
              />
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleEdit}
                className={classes.edit}
              >
                Edit
              </Button>
            </div>
          )}
        </div>
      </Container>
      <Divider light />
      <Container className={classes.mainInfo}>
        {Edit ? (
          <ContactForm
            contact={contact}
            setContact={setContact}
            image={image}
          />
        ) : (
          <ContactDetails contact={contact} setContact={setContact} />
        )}
      </Container>
      {Edit ? null : (
        <Fab
          color="primary"
          aria-label="Add New Contact"
          onClick={handleEdit}
          className={clsx({ [classes.fab]: true, [classes.show]: matches })}
        >
          <EditOutlined fontSize="small" />
        </Fab>
      )}
    </Paper>
  );
}

export default Detail;
