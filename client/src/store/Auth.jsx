import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");

    const storetokenonLS=(servertoken)=>
    {
        return localStorage.setItem("token",servertoken);
    }
    const isLoggedIn=!!token;
    console.log(isLoggedIn);


    const LogoutUser=()=>
    {
        setToken("");
       return localStorage.removeItem("token");

    };


    const userAuthentication=async()=>
    {
        try {

            
            const response=await fetch("http://localhost:3000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            });
            console.log("cheching for contact page" +response);
            if(response.ok)
            {
                const data=await response.json();
                console.log(data);
                setUser(data.userData);
            }
            
        } catch (error) {
            console.log("error fetching user data");
        }
    }
    useEffect(()=>
    {
        userAuthentication();
    },[]);
    

   



    return(
        <AuthContext.Provider value={{isLoggedIn,storetokenonLS,LogoutUser,user,UserActivation}}>
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