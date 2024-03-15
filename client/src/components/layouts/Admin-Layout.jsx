import { NavLink, useNavigate } from "react-router-dom";
import {FaHome, FaRegListAlt, FaUser} from "react-icons/fa";
import {FaMessage} from "react-icons/fa6";
import { useAuth } from "../../store/Auth";
const AdminLayouts=()=>
{
    const {user}=useAuth();
    const {isloading}=useAuth();
    const navigate=useNavigate();
if(isloading)
{
    return <h1>Loading...</h1>
}
    if(!user)
    {
        return( navigate("/"));
    }
return (
    <>
   
    <header>
        <div className="container">
            <nav>
                <ul>

                   <li><NavLink to="/admin/users" ><FaUser /> Users</NavLink></li>
                   <li><NavLink to="/admin/contacts" ><FaMessage /> Contacts</NavLink></li>
                   <li><NavLink to="/admin/services" ><FaRegListAlt /> Services</NavLink></li>
                   <li><NavLink to="/" ><FaHome /> Home</NavLink></li> 
                 
                   
                  
                </ul>
            </nav>
        </div>
    </header>
    
    </>
)
}
export default AdminLayouts;