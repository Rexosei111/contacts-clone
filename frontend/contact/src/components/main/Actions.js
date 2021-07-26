import React, { useContext } from "react";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import axios from "axios";
import { Side } from "../Layout";

function Actions({ fav, Contacts, token, id }) {
  const { setContacts } = useContext(Side);
  const useStyles = makeStyles({
    actions: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 15,
      justifyContent: "flex-end",
      height: "100%",
      visibility: "hidden",
      color: "#616161",

      '& svg': {
        cursor: 'pointer'
      }
    },
  });

  const handleFavorite = (e) => {
    e.preventDefault();
    Contacts.forEach((contact) => {
      if (contact.id === id) {
        contact.favorite = !contact.favorite;
        axios({
          method: "PATCH",
          url: `http://localhost:8000/api/contacts/${id}/fav/`,
          data: contact,
          headers: {
            "content-type": "application/json",
            Authorization: `Token ${token}`,
          },
        }).catch((error) => console.log(error));
      }
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios({
      method: "DELETE",
      url: `http://localhost:8000/api/contacts/${id}/delete/`,
      headers: {
        "content-type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        setContacts(Contacts.filter((contact) => contact.id !== id));
      })
      .catch((error) => console.log(error));
  };

  const classes = useStyles();
  return (
    <span className={classes.actions}>
      {fav ? (
        <StarIcon color="primary" fontSize="small" onClick={handleFavorite} />
      ) : (
        <StarOutlineIcon fontSize="small" onClick={handleFavorite} />
      )}

      <EditOutlinedIcon fontSize="small" />
      <DeleteOutlinedIcon fontSize="small" onClick={handleDelete} />
    </span>
  );
}

export default Actions;
