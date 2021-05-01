import React from 'react'
import HeaderForm from './headerForm'
import './header.scss'

function header() {
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
                <HeaderForm />
                <div className="right">
                    <i className="material-icons">help_outline</i>
                    <i className="material-icons">settings</i>
                    <button className="apps"><i className="material-icons">apps</i></button>
                    <div className="user-info">
                        <div className="user">S</div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default header
