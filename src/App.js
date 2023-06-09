
import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Weather from './components/Weather';
import Users from './components/Users';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
            <Route  path="/" element={<Home />} exact />
            <Route  path="/home" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/Live-Weather-Status" element={<Weather />} />
            <Route  path="/users" element={<Users />} />
            <Route  path="/create" element={<AddUser />} />
            <Route  path="/edit" element={<EditUser />} />
            <Route path="*" element={<h1>Oops! Page not found..</h1>} />
          </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
