import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../components/header_vercel'
import Card from '../components/card-repositories'

function Profile() {
  const userState = useSelector(state => {
      if (state.user.length > 0) {
          console.log("Aqui")
        return state.user
      } else {
        return JSON.parse(localStorage.getItem("SET_USER_DATA"))
      }
    })

    const { username, avatar } = userState

    return <>
    <Header userState={userState} />
    <hr/>
    <section className="profile-description">
        <div className="containter-action">
            <div className="info_user">
                <span>
                    <img src={avatar} alt={username} title={`${username}`} />
                </span>
                <div className="description-user">
                    <div className="initial-info">
                        <h3> {username} </h3>
                        <div className="setting-type-account">
                            Hobby
                        </div>
                    </div>
                    <div className="integration">
                        <p>Git integration</p>
                        <a href="https://github.com/MiguelHG2351">
                            <i className="fab fa-github"></i>
                            MiguelHG2351
                            </a>
                    </div>
                </div>
            </div>
            <div className="action-user">
                <Link to="/team" className="action-user-team" to="/teams">Invite Team</Link>
                <Link to="/import" className="action-user-import" to="/proyect-import">Import Project</Link>
            </div>
        </div>
    </section>
    <section className="projects">
        <div className="container-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    </section>
</>
}

// export default connect(mapStateToProps, null)(Profile) primer forma
export default Profile