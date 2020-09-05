import React from 'react'
 
export default function Login({ loginWithGithub }) {

    function getData(formData) {
        const email = formData.get("email")
        const password = formData.get("password")
        // console.log(email)
        // console.log(password)
        // data(email, password)
    }

    function submitUsers(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        getData(formData);
    }

    function loginGithub() {
        loginWithGithub().then((user) => {
            console.log(user)
        }).catch(err => console.log(err))
    }

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
</form>
}