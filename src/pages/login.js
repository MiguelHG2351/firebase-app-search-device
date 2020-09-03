import React from 'react'
import Login from '../components/login'
import logo from '../static/images/firebase.png'

export default function Index() {
    return <>
    <section>
        <div className="header-info">
            <img src={logo} alt="Firebase logo" />
        </div>
        <Login />
    </section>
</>
}