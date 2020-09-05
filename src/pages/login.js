import React, { useContext, useState, useEffect } from 'react'
import logo from '../static/images/firebase.png'
import context from '../context/context'
import { loginWithGithub, authStateChange } from '../firebase'

export default function Index () {
  const [user, setUser] = useState(undefined)

  const contextAPI = useContext(context)
  console.log(contextAPI)

  useEffect(() => {
    authStateChange(user => setUser(user))
  }, [])

  function getData (formData) {
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email, password)
    // console.log(email)
    // console.log(password)
    // data(email, password)
  }

  function submitUsers (e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    getData(formData)
  }

  function loginGithub () {
    loginWithGithub().then(userInfo => {
    //   const { avatar } = userInfo
      setUser(userInfo)
      console.log(user)
    }).catch(err => console.log(err))
  }

  return <>
    <section className="login-container">
      <div className="header-info">
        <picture>
          <img src={logo} alt="Firebase logo" />
        </picture>
      </div>
      {
        user === null &&
        <form className="login" onSubmit={submitUsers}>
          <div className="form-group">
            <div className="form-control">
              <input name="email" placeholder="Ingrese su correo electronico" type="email" required={true} />
            </div>
            <div className="form-control">
              <input name="password" type="password" placeholder="Ingrese una contraseña" minLength={8} required={true}/>
            </div>
            <div className="form-control button">
              <button type="submit">Enviar</button>
            </div>
            <div className="form-control github">
              <button onClick={loginGithub}>
                <i className="fab fa-github"></i>
                    Login With GitHub
              </button>
            </div>
          </div>
        </form>
      }
    </section>
    {
      user && user.avatar && <img src={user.avatar} style={{ width: '100%' }} alt="imagen del usuario"/>
    }
  </>
}
