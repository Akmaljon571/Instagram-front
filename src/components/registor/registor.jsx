import { DislikeOutlined, LoadingOutlined } from "@ant-design/icons";
import { message, notification } from "antd";
import { useRef, useState } from "react";
import useStart from "../../hooks/useStart";
import "./registor.scss"

function Registor() {
    const pasword = useRef()
    const name = useRef()
    const bio = useRef()
    const key = 'updatable';
    const [load, setLoad] = useState(true);
    const { port, setLogRes, setToken, setFindUser, setNavi } = useStart()

    const registor = () => {
       if (pasword.current.value !== "", name.current.value !== "", bio.current.value !== "") {
        fetch(port + "registr", {
          method: "POST",
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            name: name.current.value,
            pasword: pasword.current.value,
            bio: bio.current.value
          })
         })
         .then(req => req.json())
         .then(data => {
          setLoad(false)
           if (data.status === 300) {
           notification.open({
             message: 'Login',
             description:
               'Oka Bizning bazamizda sizning malumotlarizngiz bor ekanda shunga login qilib kiraqolin ',
             icon: (
               <LoadingOutlined 
                 style={{
                   color: 'green',
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
         }})
       } else {
        notification.open({
          message: 'Toldirilar',
          description:
            'Oka Bizning bazamizda sizning malumotlarizngiz bor ekanda shunga login qilib kiraqolin ',
          icon: (
            <DislikeOutlined 
              style={{
                color: 'red',
              }}
            />
          ),
        });
       }
     }

    const login = () => {
        setLogRes(true)
    }

    return ( 
    <div className="registor">
        <img width={400} height={600} src="https://i0.wp.com/www.digitalmarketingceo.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-03-at-11.05.04-PM-e1536030535339.png?fit=372%2C600&ssl=1" alt="" />
        <div className="registor-top"> 
        <div className="login registr">
        <div className="login-top">
            <img width={130} height={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="Instagram" />
            <input ref={name} required className="telephone" type="text" placeholder="UserName" />
            <input ref={pasword} required className="@gmail" type="password" placeholder="Password"/>
            <textarea ref={bio} required className="@gmail" type="text" placeholder="Bio"></textarea>
            <button onClick={registor} className="btn">{load ? "Enter" : <LoadingOutlined />}</button>
            <div>
              <span className="divSpan"></span>
              OU
              <span className="divSpan2"></span>
            </div>
            <p>Enter com o facebook</p>
            <span onClick={login} className="esqu">Login?</span>
        </div>
        <div className="login-bottom">
          <p>Nao tem uma conta? <span>Cadastra-se</span></p>
        </div>
      </div>
        </div>
    </div> );
}

export default Registor;