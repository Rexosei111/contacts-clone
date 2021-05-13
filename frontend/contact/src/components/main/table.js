import React from "react";
import "./table.scss";
import axios from "axios";
import FallbackAvatars from "./Avartar";

function table({ contacts, setOpen, setClickedContact, token, setContacts}) {
  const rowClickHandler = (e, id) => {
    setOpen(true);
    setClickedContact(id);
  };
  const handleFavorite = (e, id) => {
    e.preventDefault();
    contacts.forEach((contact) => {
      if (contact.id === id) {
        contact.favorite = !contact.favorite;
        axios({
          method: "PUT",
          url: `http://localhost:8000/api/contacts/${id}/update/`,
          data: contact,
          headers: {
            "content-type": "application/json",
            Authorization: `Token ${token}`,
          },
        }).catch((error) => console.log(error));
      }
    });
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    axios({
        method: "DELETE",
        url: `http://localhost:8000/api/contacts/${id}/delete/`,
        headers: {
            "content-type": "application/json",
            Authorization: `Token ${token}`,
        },
    })
    .then(response => {
        setContacts(contacts.filter(contact => contact.id !== id))
    })
    .catch((error) => console.log(error));

  };

  return (
    <table>
      <thead>
        <tr>
          <th className='name-col'>Name</th>
          <th className='email'>Email</th>
          <th className="phone">Phone Number</th>
          <th className="job">Job / Company</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return (
            <tr
              key={contact.id}
              onClick={(e, id) => rowClickHandler(e, contact.id)}
            >
              <td className="name-col">
                <FallbackAvatars
                  image={contact.image}
                  name={`${contact.first_name + " " + contact.last_name}`}
                />
                <h4>{`${contact.first_name + " " + contact.last_name}`}</h4>
              </td>
              <td className="email">{contact.email}</td>
              <td className="phone">
                {contact.phone}
              </td>
              <td className="job">{contact.job}</td>
              <td>
                <div className="actions">
                  <button onClick={(e, id) => handleFavorite(e, contact.id)}>
                    {contact.favorite ? (
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
                  <button onClick={(e, id) => handleDelete(e, contact.id)}>
                    <i className="material-icons">delete_forever</i>
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default table;
