import { useEffect, useState } from "react";
import {useAuth} from "../store/Auth";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
const AdminContacts=()=>
{
    const [contacts,setContacts]=useState([]);
    const {token}=useAuth();
    const getAllContactsData=async()=>
    {
        try {
            
            
            const response=await fetch("http://localhost:3000/api/admin/contacts",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            });
            const data=await response.json();
            
            console.log(contacts);
            setContacts(data);

            
        } catch (error) {
            console.log(error);
        }
    }

    const deleteContact=async(id)=>
    {
        
        try {
            const response=await fetch(`http://localhost:3000/api/admin/contact/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
       
            });
            const data=await response.json();
            if(response.ok)
            {
                toast.success("Deleted Successfully");
                getAllContactsData();
            }
            else
            {
                toast.error("Deletion Filed");
            }
            
        } catch (error) {
            console.log("error");
        }
        
        
    }


  useEffect(()=>{
    getAllContactsData();
  },[]);

   return(
    <>
    <section className="admin-contacts-section">
            <h1>Admin Contacts Data</h1>
        <div className="container admin-users">
        
    {contacts.map((curUser,index)=>{
        return (
            <div key={index}>
                <p>{curUser.username}</p>
                <p>{curUser.email}</p>
                <p>{curUser.message}</p>
                <button className="btn" onClick={()=>deleteContact(curUser._id)}>delete</button>
                </div>
        )
    })}
  
        </div>
    </section>
    
    </>
   )
}
export default AdminContacts;