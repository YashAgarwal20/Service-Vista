import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = ()=>{
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email:"",
        password:"",
    
    })
    const {storetokenonLS} = useAuth();

    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        })

    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await fetch(`http://localhost:3000/api/auth/login`, {
                method: 'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(user),
            })
            const res_data = await response.json();
            if(response.ok){
               

                storetokenonLS(res_data.token);
                
                // setUser({
                //     email: "",
                //     password: "",
                // });
                navigate("/")
                toast.success("Login successful");
            }
            else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        }
        catch (error){
            console.log("login", error);
        }

    }



    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-img">
                                <img src="/images/login2.png" alt="lets fill the login form" width="500" height="500" />
                            </div>
                            <div className="registration-form">
                                <h1 className="main=heading mb-3">Login form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email" placeholder="enter your email" id="email" required autoComplete="off" value={user.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label> 
                                        <input type="password" name="password" placeholder="password" id="password" required autoComplete="off" value={user.password} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </main>
            </section>
        </>
    );
}

export default Login;
