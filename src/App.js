import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar"
import Consulting from "./Components/Pages/Consulting"
import ContactUs from "./Components/Pages/ContactUs"
import Home from "./Components/Pages/Home"
import Marketing from "./Components/Pages/Marketing"
import Products from "./Components/Pages/Products"
import Services from "./Components/Pages/Services"
import SignUp from "./Components/Pages/SignUp"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/consulting" element={<Consulting />} />
      </Routes>
    </Router>
  )
}

export default App
