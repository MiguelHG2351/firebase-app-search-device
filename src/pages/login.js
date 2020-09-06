import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../static/images/firebase.png'
import { loginWithGithub, authStateChange } from '../firebase'

function Index () {
  // const [user, setUser] = useState(undefined)
  const dispatch = useDispatch()
  const UserState = useSelector(state => state.user)

  useEffect(() => {
    authStateChange(user => {
      localStorage.setItem("SET_USER_DATA", JSON.stringify(user))
      return dispatch({
        type: 'SET_USER_DATA',
        payload: user
      })
    })
  }, [])

  function getData (formData) {
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email, password)
  }

  function submitUsers (e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    getData(formData)
  }

  function loginGithub () {
    loginWithGithub().then(userInfo => {
    //   const { avatar } = userInfo
      // setUser(userInfo)
      console.log(userInfo)
    }).catch(err => console.log(err))
  }

  return <>
    <section className="login-container">
      {
        UserState === null &&
      <>
      <div className="header-info">
        <picture>
          <img src={logo} alt="Firebase logo" />
        </picture>
      </div>
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
        </>
      }
    </section>
    {
      //  UserState && UserState.avatar && <img src={UserState.avatar} style={{ width: '100%' }} alt="imagen del usuario"/>
      UserState && UserState.avatar && <Redirect to="/profile" />
    }
  </>
}

export default Index