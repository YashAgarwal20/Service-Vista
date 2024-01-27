import { createContext, useContext, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"));


    const storetokenonLS=(servertoken)=>
    {
        return localStorage.setItem("token",servertoken);
    }
    const isLoggedIn=!!token;
    console.log(isLoggedIn);


    const LogoutUser=()=>
    {
        setToken("");
        localStorage.removeItem("token");

    }



    return(
        <AuthContext.Provider value={{isLoggedIn,storetokenonLS,LogoutUser}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}