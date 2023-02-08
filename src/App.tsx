import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Section from "./components/Section";
import What from "./components/What";
import Deneme from "./components/Card";
import Slider from "./components/Slider";
import Testimonial from "./components/Testimontial";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
