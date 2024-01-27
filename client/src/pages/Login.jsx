import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";

const Login=()=>
{
    const [user,setUser]=useState({
        
        email:"",
        password:"",
    });
    const {storetokenonLS}=useAuth();
    const navigate=useNavigate();
   
    const handleInput=(e)=>
    {
        let name=e.target.name;
        let value=e.target.value;
        setUser({
            ...user,
            [name]:value,
        })

    }
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        try {
            const response=await fetch(`http://localhost:3000/api/auth/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user),
        })
        const res_data=await response.json();
        console.log(res_data);
        if(response.ok)
        {
            
        storetokenonLS(res_data.token);
        
            setUser({
        
                email:"",
                password:"",
            });
            navigate("/");

        }
        else
        {
            alert(res_data.extraDetails?res_data.extraDetails:res_data.message);
            setUser({
        
                email:"",
                password:"",
            });

        }

        
        
            
        } catch (error) {
             console.log(error);
        }
        


    }


    return(
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/login1.jpg" alt="Providing large range of services"
                            width="400"
                            height="500" />
                        </div>

                         <div className="registration-form">
                            <h1 className="main-heading mb-3">Login form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                type="email"
                                name="email"
                                placeholder="enter your email"
                                id="email"
                                required
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput}
                                />
                                </div>
    
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input 
                                type="password"
                                name="password"
                                placeholder="password"
                                id="password"
                                required
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                                />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Login Now
                                </button>
                            </form>
                         </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    )
};
export default Login;