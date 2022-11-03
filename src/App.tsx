import HeaderTop from './components/HeaderTop';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import FeatureSection from './components/FeatureSection';
import Testimonial  from './components/Testimonial';
import TimerSection from './components/TimerSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import TimerCard from './components/TimerCard';

import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage';
import builder from '@builder.io/react';
import { Builder, BuilderComponent } from '@builder.io/react'
import ScrollCard from './components/ScrollCard';
builder.init('b0cc6dd74943404fb548116997aebdb5');



function App() {
  useEffect(()=>{

    //Custom Header component
    Builder.registerComponent(HeaderTop, { 
      name: 'Header',
      inputs: [
        { name: 'image', type: 'file' },
        { name: 'imageAlt', type: 'string' , defaultValue: 'image'},
        { name: 'buttonLink', type: 'string'},
      ],
    });
    //Custom Hero component
    Builder.registerComponent(HeroSection, { 
      name: 'Hero',
      inputs: [
        { name: 'heroImage', type: 'file' },
        { name: 'heroImageAlt', type: 'string' , defaultValue: 'image'},
        { name: 'heroTitle', type: 'string' , defaultValue: 'Hero Title', required: true},
        { name: 'heroDescription', type: 'string' , defaultValue: 'Hero Description', required: true},
        { name: 'buttonText', type: 'string', defaultValue: 'Button', required: true},
        { name: 'buttonLink', type: 'string', required: true},
      ],
    });
     //Custom Testimonial component
     Builder.registerComponent(Testimonial, { 
      name: 'Testimonial',
      inputs: [
        { name: 'testimonialImage', type: 'file' },
        { name: 'testimonialImageAlt', type: 'string' , defaultValue: 'image'},
        { name: 'testimonialContent', type: 'string' , defaultValue: 'Testimonial Title', required: true},
        { name: 'testimonialName', type: 'string' , defaultValue: 'Testimonial Name', required: true},
      ],
    });
    //Custom FAQ component
    Builder.registerComponent(FaqSection, { 
      name: 'FAQ',
      inputs: [
        { name: 'FaqQuestion', type: 'string' , defaultValue: 'Faq Question', required: true},
        { name: 'FaqAnswer', type: 'string' , defaultValue: 'Faq Answer', required: true},
      ],
    });
    //Custom Contact component
    Builder.registerComponent(ContactSection, { 
      name: 'Contact',
      inputs: [
        { name: 'ContactQuery', type: 'string' , defaultValue: 'Contact Question', required: true},
        { name: 'ContactAnswer', type: 'string' , defaultValue: 'Contact Answer', required: true},
        { name: 'ContactEmailText', type: 'string', defaultValue: 'Button', required: true},
        { name: 'ContactEmailLink', type: 'email', defaultValue: 'xyz@gmail.com', required: true},
        { name: 'ContactPhoneText', type: 'string', defaultValue: 'Button',required: true}, 
        { name: 'ContactPhoneLink', type: 'number'},
      ],
    });
    //Custom footer component
    Builder.registerComponent(FooterSection, { 
      name: 'Footer',
      inputs: [
        { name: 'footerImage', type: 'file' , defaultValue: 'image', required: true},
        { name: 'footerImageAlt', type: 'string' , defaultValue: 'logo', required: true},
        { name: 'termPage', type: 'string', defaultValue: 'term&condition page', required: true},
        { name: 'privacyPage', type: 'string', defaultValue: 'privacy-page', required: true},
        { name: 'footerContact', type: 'string',required: true}, 
        { name: 'footerTagline', type: 'string', defaultValue: 'tagline'},
        { name: 'copyrightLine', type: 'string', defaultValue: 'copyright',required: true}, 
      ],
    });
    //Custom scroll component
    Builder.registerComponent(ScrollCard, { 
      name: 'ScrollCard',
      inputs: [
        { name: 'ScrollImage', type: 'file' , defaultValue: 'image', required: true},
        { name: 'ScrollImageAlt', type: 'string' , defaultValue: 'logo', required: true},
        { name: 'ScrollTitle', type: 'string' , defaultValue: 'XYZ', required: true},
        { name: 'backgroundColor', type: 'color', defaultValue: '#000',},
        { name: 'cardTextColor', type: 'color', defaultValue: '#fff',},

      ],
    });
     //Custom feature component
     Builder.registerComponent(FeatureSection, { 
      name: 'Feature',
      inputs: [
        { name: 'FeatureImage', type: 'file' , defaultValue: 'image', required: true},
        { name: 'FeatureImageAlt', type: 'string' , defaultValue: 'logo', required: true},
        { name: 'FeatureTitleImage', type: 'file' , defaultValue: 'XYZ'},
        { name: 'FeatureTitle', type: 'string' , defaultValue: 'XYZ', required: true},
        { name: 'AlignImageLeft', type: 'boolean' , defaultValue: false},
      ],
    });
     //Custom timer component
     Builder.registerComponent(TimerCard, { 
      name: 'Timercard',
      inputs: [
        { name: 'timerCardImage', type: 'file' , defaultValue: 'image', required: true},
        { name: 'timerCardImageAlt', type: 'string' , defaultValue: 'logo', required: true},
        { name: 'timerCardText', type: 'string' , defaultValue: 'XYZ'},
      ],
    });
    //Custom timerbox component
    Builder.registerComponent(TimerSection, { 
      name: 'Timerbox',
      inputs: [
        { name: 'timerCardImage', type: 'file' , defaultValue: 'image', required: true},
        { name: 'timerCardImageAlt', type: 'string' , defaultValue: 'logo', required: true},
        { name: 'timerCardText', type: 'string' , defaultValue: 'XYZ'},
      ],
    });
  },[]);

  return (
    <div className="App">
      <div className="site-wrapper">
        {/* <HeaderTop/>
        <HeroSection/>
        <PainSection/>
        <FeatureSection/>
        <Testimonial/>
        <ScrollSection/>
        <TimerSection/>
        <FaqSection/>
        <ContactSection/>
        <FooterSection/> */}
        <LandingPage />
      </div>
      
    </div>
  );
}

export default App;
