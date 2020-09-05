import React, { useState } from 'react'
 
export default function Login({ loginWithGithub }) {


    return <form className="login" onSubmit={submitUsers}>
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
        <img src={user.avatar} alt="imagen del usuario"/>
</form>
}

// No sirve >:v