import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const {port, setPort, logRes, setLogRes, token, setToken, findUser, setFindUser, ozgar, setOzgar, navi, setNavi} = useContext(State)

   return {port, setPort, logRes, setLogRes, token, setToken, findUser, setFindUser, ozgar, setOzgar, navi, setNavi}
  
}

export default useStart;