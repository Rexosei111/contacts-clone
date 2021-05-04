import React, { useState } from "react";
import "./createModal.scss";
import UploadButton from "./uploadButton";
import axios from "axios";

function CreateModal({ openCreate, setContacts, Contacts, setopenCreate }) {
  const [userImage, setuserImage] = useState("");
  const [createFormData, setCreateFormData] = useState({
    "user": "",
    "first_name": "",
    "last_name": "",
    "job": "",
    "email": "",
    "phoneNumber": ""
  });

  // Django csrf_token generations
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCreateFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    let csrf_token = getCookie("csrftoken");
    console.log(csrf_token);
    axios({
      method: "post",
      url: "http://localhost:8000/api/post",
      data: createFormData,
      headers: {
        "X-CSRFToken": csrf_token,
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        setContacts([...Contacts, response.data]);
        setCreateFormData({})
        // setopenCreate(false);
      })
      .catch((err) => {
        console.log(err);
        setCreateFormData({})
        // setopenCreate(false);
      });
  };

  const handleClose = () => {
    setopenCreate(false);
  };

  return (
    <dialog
      open={openCreate}
      aria-labelledby="form-dialog-title"
      className="createDialog"
    >
      <div>
        <header className="dialog-header">
          <h5>Create New Contact</h5>
        </header>
        <main>
          <form
            className="create-contact-form"
            enctype="multipart/form-data"
            method="POST"
            onSubmit={submitHandler}
          >
            <div className="form-group">
              <div className="icon user-image">
                <UploadButton setuserImage={setuserImage} />
              </div>
              <input
                type="text"
                placeholder="First Name"
                value={createFormData['first_name']}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                placeholder="Last Name"
                value={createFormData['last_name']}
                onChange={handleChange}
              ></input>
              <button className="btn-close">
                <i className="material-icons">close</i>
              </button>
            </div>
            <div className="form-group">
              <div className="icon">
                <i className="material-icons">phone</i>
              </div>
              <input
                type="text"
                placeholder="Job Title"
                value={createFormData['job']}
                onChange={handleChange}
              ></input>
              <button className="btn-close">
                <i className="material-icons">close</i>
              </button>
            </div>
            <div className="form-group">
              <div className="icon">
                <i className="material-icons">mail</i>
              </div>
              <input
                type="text"
                placeholder="Email"
                value={createFormData['email']}
                onChange={handleChange}
              ></input>
              <button className="btn-close">
                <i className="material-icons">close</i>
              </button>
            </div>
            <div className="form-group">
              <div className="icon">
                <i className="material-icons">phone</i>
              </div>
              <input
                type="text"
                placeholder="Phone"
                value={createFormData['phoneNumber']}
                onChange={handleChange}
              ></input>
              <button className="btn-close">
                <i className="material-icons">close</i>
              </button>
            </div>
            <footer className="create-form-footer">
              <button className="btn-show-more">show more</button>
              <button className="btn-cancel" onClick={handleClose}>
                cancel
              </button>
              <button type="submit" className="btn-create">
                Create
              </button>
            </footer>
          </form>
        </main>
      </div>
    </dialog>
  );
}

export default CreateModal;
