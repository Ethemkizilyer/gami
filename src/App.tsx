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



function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Section />
      <What />
     <Testimonial/>
      <Slider />
    </div>
  );
}

export default App;
