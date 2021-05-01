import React from 'react'
import './table.scss'
import FallbackAvatars from './Avartar'

function table({contacts, setOpen, setClickedContact}) {
    const rowClickHandler = (e, id) => {
        setOpen(true)
        setClickedContact(id)
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Job / Company</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact => {
                    return (
                        <tr key={contact.id} onClick={(e, id) => rowClickHandler(e, contact.id)}>
                            <td className="name-col">
                                <FallbackAvatars image={contact.image} name={`${contact.first_name + " " + contact.last_name}`}/>
                                <h4>{`${contact.first_name + " " + contact.last_name}`}</h4>
                            </td>
                            <td className="email">{contact.email}</td>
                            <td classsName="phone">{contact.phoneNumber.length > 0 ? contact.phoneNumber[0].phone : null}</td>
                            <td className="job">{contact.job}</td>
                            <td>
                                <div className="actions">
                                    <button>
                                    {contact.favorite ? <i className="material-icons" style={{color:"gold"}}>star</i> : <i className="material-icons">star_outline</i>}
                                    </button>
                                    <button><i className="material-icons">edit</i></button>
                                    <button><i className="material-icons">more_vert</i></button>
                                </div>
                            </td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}
 

export default table
