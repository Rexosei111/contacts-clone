import React, { useState, useEffect } from "react";
import "./formDialog.scss";
import axios from "axios";
import FallbackAvatars from "./Avartar";
import CLoading from "./loading";

function FormDialog({ open, setOpen, clickedContact, openCreate }) {
  const [Loading, setLoading] = useState(true);
  const [Contact, setContact] = useState({});

  useEffect(() => {
    // make an api call to get the clicked Contact
    // axios
    //   .get(`http://localhost:8000/api/contacts/${clickedContact}/`)
    //   .then((response) => {
    //     setContact(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setOpen(false);
    //   });
  }, []);
  console.log(clickedContact);
  return (
    <dialog
      open={open}
      aria-labelledby="form-dialog-title"
      className={`detail-modal ${Loading ? "d-loading" : null}`}
    >
      {Loading ? (
        <CLoading />
      ) : (
        <div>
          <header className="dialog-header">
            <FallbackAvatars
              size="large"
              image={Contact.image}
              name={`${Contact.first_name + " " + Contact.last_name}`}
            />
            <h4>{`${Contact.first_name + " " + Contact.last_name}`}</h4>
            <div className="dialog-actions">
              <button>
                {Contact.favorite ? (
                  <i className="material-icons" style={{ color: "gold" }}>
                    star
                  </i>
                ) : (
                  <i className="material-icons">star_outline</i>
                )}
              </button>
              <button>
                <i className="material-icons">edit</i>
              </button>
              <button>
                <i className="material-icons">more_vert</i>
              </button>
            </div>
          </header>
          <main>
            <h4>Contact Details</h4>
          </main>
        </div>
      )}
    </dialog>
  );
}

export default FormDialog;
