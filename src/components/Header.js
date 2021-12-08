import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <div style={ { padding: "10px 0" } } className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamy
            </Link>
            <Link to="/stream/create" className="item">
                All Streams
            </Link>
            <div className="right menu">
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header
