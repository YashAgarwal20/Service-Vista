import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
    const [isloading,setIsloading]=useState(true);
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

            setIsloading(true);
            const response=await fetch("https://service-deploy-2.onrender.com/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            });
           
            
            if(response.ok)
            {
                const data=await response.json();
                console.log(data);
                setUser(data.userData);
                setIsloading(false);
            }
            else{
                console.log("error fetching user data");
                setIsloading(false);
            }
            
        } catch (error) {
            console.log("error fetching user data");
        }
    }


    const getServices=async()=>
    {
        try {
            const response=await fetch(`https://service-deploy-2.onrender.com/api/data/service`,{
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
        <AuthContext.Provider value={{isLoggedIn,storetokenonLS,LogoutUser,user,UserActivation,services,token,isloading}}>
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