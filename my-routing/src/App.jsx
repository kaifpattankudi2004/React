import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home"

export default function App() {
  return (
    <div>
      <h1>KodNest</h1>
      <Navbar />
      <Routes>
        <Route path="/home" element = {<Home/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/contact" element = {<Contact/>}></Route>
      </Routes>
    </div>
  )
}