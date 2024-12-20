// Home.js
import React, { useMemo } from 'react';
import Banner from '../components/Banner';
import About from './About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Certificate from '../components/Certificate';
function Home() {
  const toRotate = useMemo(() => [
    "IT Enabled Services (ITES)", 
    "Outsourcing Services", 
    "BPO Services", 
    "Tech Services", 
    "PR Management"
  ], []);

  return (
    <div>
      {/* Pass the toRotate array as a prop */}
      <Banner rotateTextArray={toRotate} />
      <About />
      <Certificate />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;