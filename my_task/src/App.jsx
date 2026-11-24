import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/hero';
import Clint from './component/clint'; 
import Feature from './component/feature';
import About from './component/About';
import Achievements from './component/Achievements';
import Promo from './component/Promo';
import Blog from './component/Blog';
import Cta from './component/Cta';
import Footer from './component/Footer';

export default function App() {
return (
    <>
        <Navbar />
        <Hero />
        <Clint />
        <Feature />
        <About />
        <Achievements />
        <Promo />
        <Blog />
        <Cta />
        <Footer />
        </>
    );
}