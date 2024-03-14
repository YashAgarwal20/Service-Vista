import { useEffect, useState } from "react";
import {useAuth} from "../store/Auth";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
const AdminUsers=()=>
{
    const [users,setUsers]=useState([]);
    const {token}=useAuth();
    const getAllUsersData=async()=>
    {
        try {
            
            
            const response=await fetch("http://localhost:3000/api/admin/users",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            });
            const data=await response.json();
            
            console.log(data);
            setUsers(data);

            
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser=async(id)=>
    {
        
        try {
            const response=await fetch(`http://localhost:3000/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
       
            });
            const data=await response.json();
            if(response.ok)
            {
                toast.success("Deleted Successfully");
                getAllUsersData();
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
    getAllUsersData();
  },[]);

   return(
    <>
    <section className="admin-users-section">
        <div className="container">
            <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
        <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Update</th>
	  <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {users.map((curUser,index)=>{
        return <tr key={index}>
            <td>{curUser.username}</td>
            <td>{curUser.email}</td>
            <td>{curUser.phone}</td>
            <td><button><Link  to={`/admin/users/${curUser._id}/edit`}>Edit</Link></button></td>
            <td><button onClick={()=>deleteUser(curUser._id)}>Delete</button></td>
        </tr>
    })}
  </tbody>
</table>
        </div>
    </section>
    
    </>
   )
}
export default AdminUsers;