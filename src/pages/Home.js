// Home.js
import React from 'react';
import Banner from '../components/Banner';
import About from './About';
import Services from '../components/Services';
import Contact from '../components/Contact';

function Home() {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Contact />
        </div>
    );
}

export default Home;
