import { useEffect } from "react";
import {useAuth} from "../store/Auth";
const AdminUsers=()=>
{
    const {token}=useAuth();
    const getAllUsersData=async()=>
    {
        try {
            const response=await fetch("http://localhost:3000/api/admin/users",{
                method:"GET",
                headers:{
                    Authorization:`BEARER ${token}`,
                }
            });
            const data=await response.json();
            console.log(data);

            
        } catch (error) {
            console.log(error);
        }
    }


  useEffect(()=>{
    getAllUsersData();
  },[]);

   return(
    <h1>user admin</h1>
   )
}
export default AdminUsers;