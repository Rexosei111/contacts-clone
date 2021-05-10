import React from 'react'
import {NavLink} from 'react-router-dom'
import './sidebar.scss'

function Sidebar({contacts, setopenCreate, setOpen,openCreate}) {
    const num_of_contacts = contacts.length

    const createHandler = (e) => {
        setopenCreate(true)
    }
    return (
        <aside className="sidebar">
            <button className="create" onClick={createHandler}><i className="material-icons">add</i><span>Create contact</span></button>
            <nav> 
                <div className="first">
                    <NavLink to="/contacts">
                        <i className="material-icons">person_outline</i>
                        <span className="cnt">Contacts</span>
                        <span className="cnt-num">{num_of_contacts}</span>
                    </NavLink>
                    <NavLink to="/frequent">
                        <i className="material-icons">restore</i>
                        <span className="cnt">Frequent Contacts</span>
                        <span className="cnt-num">1</span>
                    </NavLink>
                    <NavLink to="/side">
                        <i className="material-icons">assistant</i>
                        <span className="cnt">Merge and fix</span>
                        <span className="cnt-num">1</span>
                    </NavLink>
                </div>
                <div className="second">
                    <NavLink to="/label">
                        <i className="material-icons">expand_less</i>
                        <span className="cnt">Labels</span>
                        <span className="cnt-num">1</span>
                    </NavLink>
                    <NavLink to="/label/ice">
                        <i className="material-icons">label_outline</i>
                        <span className="cnt">ICE</span>
                        <span className="cnt-num">1</span>
                    </NavLink>
                    <NavLink to="/create-label">
                        <i className="material-icons">add</i>
                        <span className="cnt">Create Label</span>
                    </NavLink>
                </div>
                <div className="third">
                    <NavLink to="/import">
                        <i className="material-icons">file_upload</i>
                        <span className="cnt">Import</span>
                    </NavLink>
                    <NavLink to="/export">
                        <i className="material-icons">cloud_download</i>
                        <span className="cnt">Export</span>
                    </NavLink>
                    <NavLink to="/print">
                        <i className="material-icons">print</i>
                        <span className="cnt">Print</span>
                    </NavLink>
                </div>
                <div className="fourth">
                    <NavLink to="/other">
                        <i className="material-icons">archive</i>
                        <span className="cnt">Other Contacts</span>
                        <span className="cnt-num">1</span>
                    </NavLink>
                    <NavLink to="/bin">
                        <i className="material-icons">delete</i>
                        <span className="cnt">bin</span>
                    </NavLink>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar
