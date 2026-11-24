import React from 'react'; 
import heroImg from "../images/Illustration.png";
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Lessons and insights <br/> <span>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className="btn1">Register</button>
            </div>
            <div className="hero-image">
                <img src={heroImg} alt="Hero Illustration" />
            </div>
        </section>
    )
    
}