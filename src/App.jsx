import { useState, useRef, useEffect } from 'react';
import './App.scss';
import useStart from './hooks/useStart';
import Prive from './prive.app';
import Public from './public.app';
function App() {
  const localToken = JSON.parse(localStorage.getItem("instaToken"))
  const [token, setToken] = useState(localToken || false);


    return (
      <>{token ? <Public /> : <Prive />}</>
    )
}

export default App;
