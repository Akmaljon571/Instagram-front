import { useState, useEffect } from 'react';
import './App.scss';
import useStart from './hooks/useStart';
import Prive from './prive.app';
import Public from './public.app';
import "antd/dist/antd.css"
function App() {
  const localToken = JSON.parse(localStorage.getItem("findUser"))
  const { findUser } = useStart()
  const [token, setToken] = useState(localToken || "");

  useEffect(() => {
    if (findUser?.token) {
      setToken(findUser?.token)
    } else if (!localToken) { 
      setToken("")
    }
  }, [findUser]);

    return (
      <>{token ? <Public /> : <Prive />}</>
    )
}

export default App;
