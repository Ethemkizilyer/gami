import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Section from './components/Section';
import What from './components/What';
import Deneme from './components/Deneme';
import Slider from './components/Slider';
import Testimonial from './components/Testimon';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Section />
      <What />
     <Testimonial/>
      <Slider />
      <Footer/>
    </div>
  );
}

export default App;
