import "./App.scss";
import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Main from "./components/main/main";
import Sidebar from "./components/sideBar/sidebar";
import axios from "axios";
import FormDialog from "./components/main/FormDialog";
import CreateModal from './components/sideBar/createModal'
import Login from './components/login/login'

// TODO -> CREATE A LOGIN AND REGISTER PAGE

function Authenticated({token}) {
  const [Contacts, setContacts] = useState([]);
  const [loading, setloading] = useState(true);
  const [open, setOpen] = useState(false);
  const [clickedContact, setClickedContact] = useState();
  const [toastopen, settoastOpen] = useState(false);
  const [openCreate, setopenCreate] = useState(false);
  const [email, setEmail] = useState()

  window.history.pushState({}, "", '/contacts')

  useEffect(() => {
    setEmail(sessionStorage.getItem('email'))
    axios({
      method: "get",
      url: "http://localhost:8000/api/contacts/",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Token ${token}`
      },
    })
      .then((response) => {
        setloading(false);
        setContacts(response.data);
      })
      .catch((error) => {
        settoastOpen(true)
        setContacts(fallbackContacts)
        setloading(false)
      });
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <div className={`dialog-backdrop ${openCreate? 'dialog-open': null}`}>
          <FormDialog
            open={open}
            setOpen={setOpen}
            clickedContact={clickedContact}
            setClickedContact={setClickedContact}
            openCreate={openCreate}
            token={token}
          />
          <CreateModal openCreate={openCreate} token={token} setContacts={setContacts} Contacts={Contacts} setopenCreate={setopenCreate}/>
        </div>
        <Header email={email} token={token} Contacts={Contacts} setContacts={setContacts}/>
        <div className="main">
          <Sidebar contacts={Contacts} setopenCreate={setopenCreate} openCreate={openCreate} setOpen={setOpen}/>

          <Switch>
            <Route path="/side">
              <Sidebar />
            </Route>
            <Route exact path="/">
              <Main
                contacts={Contacts}
                setContacts={setContacts}
                loading={loading}
                open={open}
                setOpen={setOpen}
                setClickedContact={setClickedContact}
                toastopen={toastopen}
                settoastOpen={settoastOpen}
                token={token}
              />
            </Route>
            <Main
                contacts={Contacts}
                loading={loading}
                open={open}
                setOpen={setOpen}
                setClickedContact={setClickedContact}
                toastopen={toastopen}
                settoastOpen={settoastOpen}
                token={token}
                setContacts={setContacts}
              />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
const fallbackContacts = [
    
  {
      "id": 8,
      "user": 1,
      "first_name": "Kwame",
      "last_name": "Kyei",
      "email": "kyei713@gmail.com",
      "image": null,
      "date_of_birth": "2021-08-21",
      "job": "developer",
      "phoneNumber": [],
      "favorite": true
  },
  {
      "id": 9,
      "user": 1,
      "first_name": "Derek",
      "last_name": "Oware",
      "email": "oware713@gmail.com",
      "image": null,
      "date_of_birth": "2021-08-21",
      "job": "developer",
      "phoneNumber": [],
      "favorite": true
  },
  {
      "id": 10,
      "user": 1,
      "first_name": "Mensah",
      "last_name": "Brown",
      "email": "brown24@gmail.com",
      "image": null,
      "date_of_birth": "2021-08-21",
      "job": "developer",
      "phoneNumber": [],
      "favorite": true
  },
  
  {
      "id": 12,
      "user": 1,
      "first_name": "Maureen",
      "last_name": "Ewurama",
      "email": "ewurama@gmail.com",
      "image": null,
      "date_of_birth": "2021-08-21",
      "job": "lecturer",
      "phoneNumber": [],
      "favorite": true
  },
  {
      "id": 1,
      "user": 1,
      "first_name": "Mr",
      "last_name": "Osei",
      "email": null,
      "image": null,
      "date_of_birth": null,
      "job": null,
      "phoneNumber": [
          {
              "id": 1,
              "phone": "0557570564",
              "contact": 1
          },
          {
              "id": 2,
              "phone": "0543524258",
              "contact": 1
          }
      ],
      "favorite": false
  },
  {
      "id": 7,
      "user": 1,
      "first_name": "Oduro",
      "last_name": "Twumasi Barnes",
      "email": "barnes111@gmail.com",
      "image": "http://localhost:8000/media/contact-images/api.png",
      "date_of_birth": "2021-08-11",
      "job": "software Engineer",
      "phoneNumber": [],
      "favorite": false
  },
  {
      "id": 4,
      "user": 1,
      "first_name": "Rex",
      "last_name": "Osei",
      "email": "kyeisamuel931@gmail.com",
      "image": "http://localhost:8000/media/contact-images/beb9f0204880669056dffd3d24074959.jpg",
      "date_of_birth": null,
      "job": null,
      "phoneNumber": [
          {
              "id": 4,
              "phone": "0543524258",
              "contact": 4
          }
      ],
      "favorite": false
  },
]

export default Authenticated;
