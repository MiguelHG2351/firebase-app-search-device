import React, { useContext } from 'react'
import Login from '../components/login'
import logo from '../static/images/firebase.png'
import context from '../context/context'
import { loginWithGithub } from '../firebase'

export default function Index() {
    const contextAPI = useContext(context)
    console.log(contextAPI)

    return <>
    <section>
        <div className="header-info">
            <img src={logo} alt="Firebase logo" />
        </div>
        <Login loginWithGithub={loginWithGithub} />
    </section>
</>
}