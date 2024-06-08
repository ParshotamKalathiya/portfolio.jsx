import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;
