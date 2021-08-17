import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Side } from "../Layout";
import { Button, IconButton, Paper, Typography } from "@material-ui/core";
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
import ImageUploadBtn from "./ImageUploadBtn";
import ContactForm from "./ContactForm";

function Detail(props) {
  const query = new URLSearchParams(useLocation().search);

  const { id } = useParams();
  const [Edit, setEdit] = useState(query.get("edit"));
  const history = useHistory();

  const { fullSide, Contacts, handleContacts } = React.useContext(Side);

  const [contact, setContact] = useState({});

  const [Isfav, setIsFav] = useState();

  const [image, setimage] = useState(null)

  const useStyles = makeStyles((theme) => ({
    container: {
      marginLeft: fullSide ? 265 : 0,
      height: "90vh",
      padding: "10px 20px",
      backgroundColor: "#ffffff",
      // overflowY: "auto"
    },
    paper: {
      width: "100%",
      height: "35%",
      // borderBottom: "1px solid #e0e0e0",
      padding: "15px",
      display: "flex",
      gap: 25,
    },
    name: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      gap: 25,
      // backgroundColor: "#22efce"
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
    let formData = new FormData();
    formData.append("first_name", contact.first_name);
    formData.append("last_name", contact.last_name);
    formData.append("email", contact.email);
    formData.append("job", contact.job);
    formData.append("phone", contact.phone);
    formData.append("image", image);

    axios({
        method: "PATCH",
        url: `http://localhost:8000/api/contacts/${contact.id}/update/`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
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
        {Edit ? (
          <IconButton className={classes.backBtn} onClick={() => setEdit(0)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        ) : (
          <IconButton className={classes.backBtn}>
            <ArrowBackIcon onClick={prevPage} />
          </IconButton>
        )}
        <div className={classes.name}>
          <div style={{position: "relative"}}>
            <AccountAvartar
              size="xxlarge"
              link={contact.imageURL ? contact?.imageURL : image}
              email={contact.first_name}
            />
            <ImageUploadBtn setimage={setimage}/>
          </div>
          <div className={classes.info}>
            {contact.first_name && <Typography variant="h5">{`${
              contact?.first_name + " " + contact?.last_name
            }`}</Typography>}
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
              <Menu />
              <Button
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleEdit}
              >
                Edit
              </Button>
            </div>
          )}
        </div>
      </Paper>
      <Divider light />
      <div
        style={{
          padding: "8px 60px",
          width: "100%",
          overflowY: "auto",
        }}
      >
        {Edit ? <ContactForm contact={contact} setContact={setContact} image={image} /> :
        <ContactDetails contact = {contact} setContact={setContact} />
        }
      </div>
    </main>
  );
}

export default Detail;
