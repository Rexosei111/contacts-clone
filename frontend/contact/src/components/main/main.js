import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content";
import { Side } from "../Layout"
import { Redirect } from 'react-router-dom'
import axios from 'axios'

function Main({token}) {
  const [contacts, setContacts] = useState([])
  const fullSide = React.useContext(Side)
  
  const useStyles = makeStyles((theme) => ({
    container : {
      marginLeft: fullSide ? 280: 0,
      overflowX: "hidden",
      height: "90vh",
      padding: "5px 10px",
      backgroundColor: "#ffffff"
    }
  }));
  
  const classes = useStyles();
  
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/api/contacts/",
      headers: {
        "Content-type": "application/json",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        // setloading(false);
        setContacts(response.data);
      })
      .catch((error) => {
        // settoastOpen(true);
        setContacts(fallbackContacts);
        // setloading(false);
      });
  }, []);

  if (!token) {
    return <Redirect to="/login" />
  }

  return (
      <main className={classes.container}>
        <Content contacts={contacts} />
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
