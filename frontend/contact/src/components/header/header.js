import React from 'react'
import HeaderForm from './headerForm'
import './header.scss'

function header({email, token, Contacts, setContacts}) {
    const humbHandler = (e) => {
        const side = document.querySelector('aside')
        side.classList.toggle('close')
    }
    return (
        <header className = "page-header">
            <nav className="top-nav">
                <div className="left">
                    <button className="humb" onClick={humbHandler}><i className="material-icons">menu</i></button>
                    <div className="app-logo">
                        <i className="large material-icons" id="logo">account_circle</i>
                        <a href="/" className="app-name">Contacts</a>
                    </div>
                </div>
                <HeaderForm token={token} Contacts={Contacts} setContacts={setContacts}/>
                <div className="right">
                    <i className="material-icons">help_outline</i>
                    <i className="material-icons">settings</i>
                    <button className="apps"><i className="material-icons">apps</i></button>
                    <div className="user-info">
                        <div className="user">{email ? email[0].toUpperCase() : 'S'}</div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default header
