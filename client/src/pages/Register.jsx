import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {toast } from 'react-toastify';
import { useAuth } from "../store/auth";

const Register=()=>
{
    
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });
    const {storetokenonLS} =useAuth();
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
    const handleSubmit= async(e)=>
    {
        e.preventDefault();
        try {
            const response=await fetch(`http://localhost:3000/api/auth/register`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(user),
                

            });

            const res_data = await response.json();
            console.log(res_data);

            //clearing data from console
            if(response.ok)
            {
                storetokenonLS(res_data.token);
                
                setUser({
                    username:"",
        email:"",
        phone:"",
        password:"",
                });
                toast.success("Registration Successful");
                navigate("/");

            }
            else{
                toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
            }
            // console.log(response);
            
            
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
                            <img src="/images/registration-img.jpg" alt="Providing large range of services"
                            width="400"
                            height="500" />
                        </div>

                         <div className="registration-form">
                            <h1 className="main-heading mb-3">registration form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input 
                                type="text"
                                name="username"
                                placeholder="username"
                                id="username"
                                required
                                autoComplete="off"
                                value={user.username}
                                onChange={handleInput}
                                />
                                </div>
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
                                    <label htmlFor="phone">phone</label>
                                    <input 
                                type="number"
                                name="phone"
                                placeholder="phone"
                                id="phone"
                                required
                                autoComplete="off"
                                value={user.phone}
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
                                    Register Now
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
export default Register;