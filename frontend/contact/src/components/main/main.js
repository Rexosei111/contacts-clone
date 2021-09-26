import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content";
import { Side } from "../Layout";
import { Link, Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import ImportContactsRoundedIcon from "@material-ui/icons/ImportContactsRounded";

function Main({ token }) {
  const { fullSide, Contacts, handleContacts } = React.useContext(Side);
  const [Loading, setLoading] = useState(true);
  const matches = useMediaQuery("(max-width: 1024px)");

  const useStyles = makeStyles((theme) => ({
    container: {
      marginLeft: matches ? 0 : fullSide ? 265 : 0,
      height: "90vh",
      backgroundColor: "#ffffff",
    },
    containerLoading: {
      marginLeft: matches ? 0 : fullSide ? 265 : 0,
      height: "90vh",
      backgroundColor: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    fab: {
      position: "absolute",
      visibility: "hidden",
      width: theme.spacing(6),
      height: theme.spacing(6),
      bottom: 10,
      right: 10,
    },
    show: {
      visibility: "visible",
    },
    BgIconContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    BgIcon: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  }));

  const history = useHistory();

  const handleClick = () => {
    history.push("/new");
  };
  const classes = useStyles();
  const show = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    if (token) {
      axios({
        method: "get",
        url: "http://localhost:8000/api/contacts/",
        headers: {
          "Content-type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
        .then((response) => {
          handleContacts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          handleContacts(fallbackContacts);
          setLoading(false);
        });
    }
  }, [token, handleContacts]);

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <main
      className={clsx({
        [classes.container]: Contacts.length !== 0,
        [classes.containerLoading]: !(Contacts.length !== 0),
      })}
    >
      {Loading ? (
        <CircularProgress size="40px" />
      ) : Contacts.length !== 0 ? (
        <Content Contacts={Contacts} token={token} />
      ) : (
        <Container maxWidth="sm" className={classes.BgIconContainer}>
          <ImportContactsRoundedIcon
            color="disabled"
            className={classes.BgIcon}
            fontSize="large"
          />
          <Typography
            variant="h6"
            color="textSecondary"
            style={{
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              textAlign: "center",
            }}
          >
            No Contacts Found!{" "}
            {
              <Link
                to="/new"
                style={{
                  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                  textAlign: "center",
                }}
              >
                Add Contact
              </Link>
            }
          </Typography>
        </Container>
      )}
      <Fab
        color="primary"
        aria-label="Add New Contact"
        onClick={handleClick}
        className={clsx({ [classes.fab]: true, [classes.show]: show })}
      >
        <AddIcon fontSize="small" />
      </Fab>
    </main>
  );
}

const fallbackContacts = [
  {
    id: 8,
    user: 1,
    first_name: "Kwame",
    last_name: "Kyei",
    email: "kyei713@gmail.com",
    image: null,
    date_of_birth: "2021-08-21",
    job: "developer",
    phoneNumber: [],
    favorite: true,
  },
  {
    id: 9,
    user: 1,
    first_name: "Derek",
    last_name: "Oware",
    email: "oware713@gmail.com",
    image: null,
    date_of_birth: "2021-08-21",
    job: "developer",
    phoneNumber: [],
    favorite: true,
  },
  {
    id: 10,
    user: 1,
    first_name: "Mensah",
    last_name: "Brown",
    email: "brown24@gmail.com",
    image: null,
    date_of_birth: "2021-08-21",
    job: "developer",
    phoneNumber: [],
    favorite: true,
  },

  {
    id: 12,
    user: 1,
    first_name: "Maureen",
    last_name: "Ewurama",
    email: "ewurama@gmail.com",
    image: null,
    date_of_birth: "2021-08-21",
    job: "lecturer",
    phoneNumber: [],
    favorite: true,
  },
  {
    id: 1,
    user: 1,
    first_name: "Mr",
    last_name: "Osei",
    email: null,
    image: null,
    date_of_birth: null,
    job: null,
    phoneNumber: [
      {
        id: 1,
        phone: "0557570564",
        contact: 1,
      },
      {
        id: 2,
        phone: "0543524258",
        contact: 1,
      },
    ],
    favorite: false,
  },
  {
    id: 7,
    user: 1,
    first_name: "Oduro",
    last_name: "Twumasi Barnes",
    email: "barnes111@gmail.com",
    image: "http://localhost:8000/media/contact-images/api.png",
    date_of_birth: "2021-08-11",
    job: "software Engineer",
    phoneNumber: [],
    favorite: false,
  },
  {
    id: 4,
    user: 1,
    first_name: "Rex",
    last_name: "Osei",
    email: "kyeisamuel931@gmail.com",
    image:
      "http://localhost:8000/media/contact-images/beb9f0204880669056dffd3d24074959.jpg",
    date_of_birth: null,
    job: null,
    phoneNumber: [
      {
        id: 4,
        phone: "0543524258",
        contact: 4,
      },
    ],
    favorite: false,
  },
];

export default Main;
