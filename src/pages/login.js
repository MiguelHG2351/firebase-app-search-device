import React from 'react'
import Login from '../components/login'
import logo from '../static/images/firebase.png'
// import context from '../context/context'

export default function Index() {
    // const contextAPI = useContext(context)
    return <>
    <section>
        <div className="header-info">
            <img src={logo} alt="Firebase logo" />
        </div>
        <Login />
    </section>
</>
}