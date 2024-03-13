import { useEffect, useState } from "react";
import {useAuth} from "../store/Auth";
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


  useEffect(()=>{
    getAllUsersData();
  },[]);

   return(
    <>
    <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Update</th>
	  <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {users.map((curUser,index)=>{
        return <tr key={index}>
            <td>{curUser.username}</td>
            <td>{curUser.email}</td>
            <td>{curUser.phone}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    })}
  </tbody>
</table>
    </>
   )
}
export default AdminUsers;