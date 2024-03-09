import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
    const [services,setServices]=useState([]);

    const storetokenonLS=(servertoken)=>
    {
        setToken(servertoken);
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


    const getServices=async()=>
    {
        try {
            const response=await fetch(`http://localhost:3000/api/data/service`,{
            method:"GET",
        });

        if(response.ok)
        {
            const data=await response.json();
            setServices(data.msg);
            console.log(data.msg);
        }

        
            
        } catch (error) {
            console.log(error);
        }
        


    }

    useEffect(()=>
    {
        getServices();
        userAuthentication();
    },[]);
    

   



    return(
        <AuthContext.Provider value={{isLoggedIn,storetokenonLS,LogoutUser,user,UserActivation,services}}>
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