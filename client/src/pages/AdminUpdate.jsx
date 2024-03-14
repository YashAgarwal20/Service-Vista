import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

const AdminUpdate=()=>
{
    const [data,setData]=useState({
        username:"",
        email:"",
        phone:"",
    });
    const params=useParams();
    const id=params.id;
    const {token}=useAuth();

    const getSingleUserData=async()=>
    {
        
        try {
            const response=await fetch(`http://localhost:3000/api/admin/users/${id}`,{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
       
            });
            const userdata=await response.json();
            setData(userdata);
          
            
        } catch (error) {
            console.log("error");
        }
        
        
    }

    useEffect(()=>{
        getSingleUserData();
    },[])

    const handleInput=(event)=>
    {
        const name=event.target.name;
        const value=event.target.value;

        setData(
            {
                ...data,
                [name]:value,
            }
           
        )
        
    }
    const handleSubmit =async(e)=>
    {
        e.preventDefault();
        try {
            
            const response=await fetch(`http://localhost:3000/api/admin/users/update/${id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`,
                    
                },
                body:JSON.stringify(data),
            });
            if(response.ok)
            {
                toast.success("Updated Successfully");

            }
            else{
                toast.error("Update Failed");
            }
            
            
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Update User Data</h1>
                </div>
               
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/contact.jpg" alt="we are always ready to help" />
                    </div>

                   
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={data.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={data.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">Phone</label>
                                
                                <input
                                    type="phone"
                                    name="phone"
                                    id="phone"
                                    autoComplete="off"
                                    value={data.phone}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <button type="submit">Update</button>
                            </div>
                        </form>
                    </section>
                </div>

            
            </section>
    )
}

export default AdminUpdate;