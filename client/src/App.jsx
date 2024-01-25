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
      <Route path="*" element={<Error />} />


    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
};

export default App;
