import React from 'react'
import Table from './table'
import './main.scss'
import Loading from './loading'
import Toast from './toast'


function Main({contacts, loading, open, setOpen, setClickedContact, toastopen, settoastOpen, token, setContacts}) {
   
    return (
        <main className={loading ? 'loading' : null}>
            {loading ? <Loading /> : <div className="contact-table"><Table token={token} setContacts={setContacts} contacts={contacts} setOpen={setOpen} setClickedContact={setClickedContact} /></div>}
            <Toast toastopen={toastopen} settoastOpen={settoastOpen} />
            
            <button className="fab">
                <i className="material-icons">add</i>
            </button>
        </main>
    )
}

export default Main
