import React from 'react'
import { Link } from 'react-router-dom' 

export default function HeaderSite ({userState}) {
    const { username, avatar }  = userState
    return <header className="header-profile">
        <div className="header-container">
            <div className="hero-links">
                <Link to="/">
                    <svg width="31" height="32" viewBox="0 0 116 100" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0z"/></svg>
                </Link>
                <Link to="/profile" className="photo_and_user">
                    <div className="bar"></div>
                    <img src={ avatar } alt={username}/>
                    <p>{username}</p>
                </Link>
            </div>
            <div className="login">
                
            </div>
        </div>
    </header>
}