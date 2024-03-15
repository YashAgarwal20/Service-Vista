import { useEffect, useState } from "react";
import {useAuth} from "../store/Auth";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
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
    <Container>
    <section>
  
  <h1>Admin Contacts Data</h1>
  <div className="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Message</th>
          <th>Delete</th>
          
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
    {contacts.map((curUser,index)=>{
        return <tr key={index}>
            <td>{curUser.username}</td>
            <td>{curUser.email}</td>
            <td>{curUser.message}</td>
           <td><button onClick={()=>deleteContact(curUser._id)}>Delete</button></td>
        </tr>
    })}
  </tbody>
    </table>
  </div>
</section>

    </Container>
   )
}

const Container=styled.div`

h1{
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin-bottom: 15px;
  }
  table{
    width:100%;
    table-layout: fixed;
    background-color: rgb(127, 215, 184);
    
  }
  .tbl-header{
    background-color: rgba(255,255,255,0.3);
   }
  .tbl-content{
    
    overflow-x:auto;
    margin-top: 0px;
    border: 1px solid rgba(255,255,255,0.3);
  }
  th{
    font-size: 1.7rem;
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    color: var(--dark-color);
    
    text-transform: uppercase;
  }
  td{
    padding: 15px;
    text-align: left;
    vertical-align:middle;
    font-weight: 400;
    font-size: 1.7rem;
    color: var(--dark-color);
    border-bottom: solid 1px rgba(255,255,255,0.1);
  }


  
  
  /* demo styles */
  
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
  body{
    background: -webkit-linear-gradient(left, #25c481, #25b7c4);
    background: linear-gradient(to right, #25c481, #25b7c4);
    font-family: 'Roboto', sans-serif;
  }
  section{
    margin: 50px;
  }
  
  
  
  
  /* for custom scrollbar for webkit browser*/
  
  ::-webkit-scrollbar {
      width: 6px;
  } 
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
  } 
  ::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
  }
`;

export default AdminContacts;