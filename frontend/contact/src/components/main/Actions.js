import React, { useContext, useEffect, useState } from "react";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Side } from "../Layout";
import Menu from '../Menu'
import { useHistory } from "react-router";

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

    "& svg": {
      cursor: "pointer",
    },
  },
});

function Actions({ fav, Contacts, token, id }) {
  const { setContacts } = useContext(Side);
  const [isFav, setIsFav] = useState(fav);

  useEffect(() => {
    setIsFav(fav);
  }, [fav]);

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation()
    setIsFav(!isFav);

    Contacts.forEach((contact) => {
      if (contact.id === id) {
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

  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   axios({
  //     method: "DELETE",
  //     url: `http://localhost:8000/api/contacts/${id}/delete/`,
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: `Token ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       setContacts(Contacts.filter((contact) => contact.id !== id));
  //     })
  //     .catch((error) => console.log(error));
  // };

  const history = useHistory()

  const classes = useStyles();
  return (
    <span className={classes.actions}>
      {isFav ? (
        <StarIcon color="primary" fontSize="small" onClick={handleFavorite} />
      ) : (
        <StarOutlineIcon fontSize="small" onClick={handleFavorite} />
      )}

      <EditOutlinedIcon fontSize="small" onClick={() => history.push("/contacts/"+ id + "?edit=1")} />
      {/* <DeleteOutlinedIcon fontSize="small" onClick={handleDelete} /> */}
      <Menu />
    </span>
  );
}

export default Actions;
