import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const {port, setPort} = useContext(State)

   return {port, setPort}
  
}

export default useStart;