import React, { useState } from "react";
import "./createModal.scss";
import UploadButton from "./uploadButton";
import axios from "axios";

function CreateModal({
  openCreate,
  setContacts,
  Contacts,
  setopenCreate,
  token,
}) {
  const [userImage, setuserImage] = useState();
  const [phone, setphone] = useState("");
  let [createFormData, setCreateFormData] = useState({
    user: "",
    first_name: "",
    last_name: "",
    job: "",
    email: "",
  });

  console.log(userImage)
  
  const phoneChange = (e) => {
    setphone(e.target.value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log({...createFormData, 'phone_number': [{'phone': `${phone}`}]})
    const data = { ...createFormData, phone_number: [{ phone: `${phone}` }], image: `${userImage}` };
    console.log(data)
    axios({
      method: "post",
      url: "http://localhost:8000/api/contacts/create/",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Token ${token}`,
      },
    })
      .then((response) => {
        setContacts([...Contacts, response.data]);
        setCreateFormData({});
        setopenCreate(false);
      })
      .catch((err) => {
        console.log(err);
        setCreateFormData({});
        setopenCreate(false);
      });
  };

  const handleClose = (e) => {
    e.preventDefault();
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
                name="first_name"
                value={createFormData["first_name"]}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={createFormData["last_name"]}
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
                name="job"
                placeholder="Job Title"
                value={createFormData["job"]}
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
                name="email"
                placeholder="Email"
                value={createFormData["email"]}
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
                name="phoneNumber"
                placeholder="Phone"
                value={createFormData["phoneNumber"]}
                onChange={phoneChange}
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
