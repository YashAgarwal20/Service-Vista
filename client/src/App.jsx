import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

import Footer from "./components/Footer";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminUsers from "./pages/Admin-Users";
import AdminServices from "./pages/Admin-Services";
import AdminContacts from "./pages/Admin-Contacts";
import AdminLayouts from "./components/layouts/Admin-Layout";
import AdminUpdate from "./pages/AdminUpdate";

const App=()=>
{
  
  return(
    <>
    
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/admin" element={<AdminLayouts />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/contacts" element={<AdminContacts />} />
      <Route path="/admin/services" element={<AdminServices />} />
      <Route path="/admin/users/:id/edit" element={<AdminUpdate/>} />
      
      <Route path="*" element={<Error />} />


    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
};

export default App;
