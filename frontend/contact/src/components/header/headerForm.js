import React, {useState} from 'react'
import './headerForm.scss'
import axios from 'axios'
import { useHistory } from 'react-router'

function HeaderForm({token, Contacts, setContacts}) {
    const [formData, setFormData] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/contacts?search=${formData}`)
        axios({
            method: "GET",
            url: `http://localhost:8000/api/contacts?search=${formData}`,
            headers: {
                "content-type": "application/json",
                "Authorization": `Token ${token}`
            }
        })
        .then(response => setContacts(response.data))
        .catch(error => console.log(error))
    }

    return (
        <form className="search-form" onSubmit={handleSubmit} onChange={e => setFormData(e.target.value)}>
            <button type="submit" className="btn-submit"><i className="material-icons search">search</i></button>
            <input type="search" className="search-inp" placeholder="Search"/>
        </form>
    )
}

export default HeaderForm
