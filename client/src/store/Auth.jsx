import { createContext, useContext } from "react";
export const AuthContext=createContext();


export const AuthProvider=({children})=>
{
    const storetokenonLS=(token)=>
    {
        return localStorage.setItem("token",token);
    }
    return(
        <AuthContext.Provider value={storetokenonLS}>
            {children}
        </AuthContext.Provider>
    )
};

export const Auth=()=>
{
    return useContext(AuthContext);
}