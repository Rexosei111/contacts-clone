import React, {useState} from "react";
import "./createModal.scss";
import UploadButton from "./uploadButton";

function CreateModal({ openCreate, setContacts, setopenCreate}) {
    const [userImage, setuserImage] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [job, setJob] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [createFormData, setCreateFormData] = useState({})

    const firstNameHandler = (e) => {
        setFirst_name(e.target.value)
    }
    const lastNameHandler = (e) => {
        setLast_name(e.target.value)
    }
    const jobHandler = (e) => {
        setJob(e.target.value)
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const phoneHandler = (e) => {
        setPhone(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setCreateFormData({
            
            "user": 1,
            "first_name": first_name,
            "last_name": last_name,
            "image": userImage,
            "email": email,
            "job": job,
            "phoneNumber": [
                {
                    "phone": phone,
                }
            ]
        })
        console.log(createFormData)
    }

    const handleClose = () => {
      setopenCreate(false)
    }

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
          <form className="create-contact-form" onSubmit={submitHandler}>
            <div className="form-group">
              <div className="icon user-image">
                <UploadButton setuserImage={setuserImage} />
              </div>
              <input type="text" placeholder="First Name" value={first_name} onChange={firstNameHandler}></input>
              <input type="text" placeholder="First Name" value={last_name} onChange={lastNameHandler}></input>
              <button className="btn-close">
                <i className="material-icons">close</i>
              </button>
            </div>
            <div className="form-group">
              <div className="icon">
                <i className="material-icons">phone</i>
              </div>
              <input type="text" placeholder="Job Title" value={job} onChange={jobHandler}></input>
              <button className="btn-close">
                <i className="material-icons">close</i>
              </button>
            </div>
            <div className="form-group">
              <div className="icon">
                <i className="material-icons">mail</i>
              </div>
              <input type="text" placeholder="Email" value={email} onChange={emailHandler}></input>
              <button className="btn-close">
                <i className="material-icons">close</i>
              </button>
            </div>
            <div className="form-group">
              <div className="icon">
                <i className="material-icons">phone</i>
              </div>
              <input type="text" placeholder="Phone" value={phone} onChange={phoneHandler}></input>
              <button className="btn-close">
                <i className="material-icons">close</i>
              </button>
            </div>
            <footer className="create-form-footer">
              <button className="btn-show-more">show more</button>
              <button className="btn-cancel" onClick={handleClose}>cancel</button>
              <button type="submit" className="btn-create">Create</button>
            </footer>
          </form>
        </main>
      </div>
    </dialog>
  );
}

export default CreateModal;
