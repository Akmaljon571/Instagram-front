import { createContext, useState } from "react";

export const State = createContext()


export const StatePriveder = ({ children }) => {
    const [port, setPort] = useState("http://localhost:9090/");
    
    const data = {port, setPort}

    return <State.Provider value={data}>{ children }</State.Provider>
}