import { useRef } from "react";
import useStart from "../../hooks/useStart";
import "./login.scss"

function Login() {
    const pasword = useRef()
    const name = useRef()
    const { port } = useStart()

    const login = () => {
       fetch(port + "login", {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          
        })
       })
    }

    return ( 
    <>
      <div className="login">
        <div className="login-top">
            <img width={130} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="Instagram" />
            <input ref={name} required className="telephone" type="text" placeholder="UserName" />
            <input ref={pasword} required className="@gmail" type="password" placeholder="Password"/>
            <button onClick={login} className="btn">Enter</button>
            <div>
              <span className="divSpan"></span>
              OU
              <span className="divSpan2"></span>
            </div>
            <p>Enter com o facebook</p>
            <span className="esqu">Esqueceua senha?</span>
        </div>
        <div className="login-bottom">
          <p>Nao tem uma conta? <span>Cadastra-se</span></p>
        </div>
      </div>
      <div className="login_bottom">
       @ 2022 INSTRAGRAM DO FAACEBOOK
      </div>
    </> 
    );
}

export default Login;