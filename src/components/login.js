import React from 'react'

export default function Login() {

    function getData(formData) {
        console.log(formData.get("email"))
    }

    function sendUsers(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        getData(formData)
    }

    return <form className="login" onSubmit={sendUsers}>
        <div className="form-group">
            <div className="form-control">
                <input name="email" placeholder="Ingrese su correo electronico" type="email" required={true} />
            </div>
            <div className="form-control">
            <input name="password" type="password" placeholder="Ingrese una contraseña" minLength={8} required={true}/>
            </div>
            <div className="form-control button">
                <button>Enviar</button>
            </div>
        </div>
</form>
}