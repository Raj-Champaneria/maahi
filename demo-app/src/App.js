import "./App.css";
import "./Components/HomePage/Home"
import { About } from "./Components/AboutUs/About";
import { Contact } from "./Components/ContactUs/Contact";
import { Login } from "./Components/Login/Login";
import { Registration } from "./Components/Registration/Registration";

import {
  Route,
  Routes
} from 'react-router-dom'
import { Home } from "./Components/HomePage/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route  path="/registration" element={<Registration/>} />
        <Route  path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
