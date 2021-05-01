import React from 'react'
import './headerForm.scss'

function headerForm() {
    return (
        <form className="search-form">
            <button type="submit" className="btn-submit"><i className="material-icons search">search</i></button>
            <input type="search" className="search-inp" placeholder="Search"/>
        </form>
    )
}

export default headerForm
