import { useRef } from "react";
import { DislikeOutlined } from '@ant-design/icons';
import { notification, message  } from 'antd';
import useStart from "../../hooks/useStart";
import "./login.scss"

function Login() {
    const pasword = useRef()
    const name = useRef()
    const { port, setLogRes, setToken, setFindUser, setNavi } = useStart()
    const key = 'updatable';

    const login = () => {
       fetch(port + "login", {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name.current.value,
          password: pasword.current.value
        })
       })
       .then(req => req.json())
       .then(data => {
         if (data.status === 300) {
          notification.open({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: (
              <DislikeOutlined
                style={{
                  color: 'red',
                }}
              />
            ),
          });
        } else if (data.status === 200) {
          setFindUser(data)
          setToken(data.token)
          setNavi("/home")
          message.loading({
            content: 'Loading...',
            key,
          });
          setTimeout(() => {
            message.success({
              content: 'Loaded!',
              key,
              duration: 2,
            });
          }, 500);
        }
       })
       pasword.current.value = ""
       name.current.value = ""
    }

    const registor = () => {
       setLogRes(false)
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
            <span onClick={registor} className="esqu">Registration?</span>
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