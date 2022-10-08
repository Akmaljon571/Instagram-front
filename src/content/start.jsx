import { createContext, useEffect, useState } from "react";

export const State = createContext()


export const StatePriveder = ({ children }) => {
    const findToken = JSON.parse(localStorage.getItem("token"))
    const user = JSON.parse(localStorage.getItem("findUser"))
    const Navigate = JSON.parse(localStorage.getItem("navi"))
    const [port, setPort] = useState("http://localhost:9000/"); // Asosiy port 
    const [logRes, setLogRes] = useState(true); // login yoki registratsiyaga qaysi birini ochib berish uchun 
    const [findUser, setFindUser] = useState(user || {}); //Aynan qaysi user kirganligi
    const [token, setToken] = useState(findToken || ""); // Osha userni Token
    const [ozgar, setOzgar] = useState(0);  //ozgartiruvchi
    const [navi, setNavi] = useState(Navigate || "/");  //Navigate link
 
    useEffect(() => {
       if (findUser?.token) {
        setToken(findUser?.token)
        fetch(port + "login", {
            method: "GET", 
            headers: {
                token: token
            }
        })
           .then(req => req.json())
           .then(data => setFindUser(data))
       }
    }, [ozgar, setFindUser, port, token]);

    useEffect(() => {
       localStorage.setItem("navi", JSON.stringify(navi))
    }, [navi]);

    useEffect(() => {
        if (findUser?.token) {
            localStorage.setItem("token", JSON.stringify(findUser?.token))
            localStorage.setItem("findUser", JSON.stringify(findUser))
        }
    }, [findUser]);
    
    const data = {port, setPort, logRes, setLogRes, token, setToken, findUser, setFindUser, ozgar, setOzgar, navi, setNavi}

    return <State.Provider value={data}>{ children }</State.Provider>
}