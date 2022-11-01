import HeaderTop from './components/HeaderTop';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import FeatureSection from './components/FeatureSection';
import Testimonial  from './components/Testimonial';
import ScrollSection from './components/ScrollSection';
import TimerSection from './components/TimerSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (


    <div className="App">
      <div className="site-wrapper">
        <HeaderTop/>
        <HeroSection/>
        <PainSection/>
        <FeatureSection/>
        <Testimonial/>
        <ScrollSection/>
        <TimerSection/>
        <FaqSection/>
        <ContactSection/>
        <FooterSection/>
      </div>
      
    </div>
  );
}

export default App;
