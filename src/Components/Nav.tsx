import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="nav" >
            <div>
                <Link to="/"> Home </Link>
                <Link to="/ds"> Decks </Link>
                <Link to="/tm"> Templates </Link>
            </div>
        </div>
    )
}

export default Nav;