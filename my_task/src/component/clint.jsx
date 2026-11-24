import React from 'react';
import logo1 from '../images/Logo1.png';
import logo2 from '../images/Logo2.png';
import logo3 from '../images/Logo3.png';
import logo4 from '../images/Logo4.png';
import logo5 from '../images/Logo5.png';
import logo6 from '../images/Logo6.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export default function Clint() {
    return (
        <section className="clients-section">
            <h2>Our Clients</h2>
            <p>We have been working with some Fortune 500+ clients</p>
            <div className="clients-logos">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt={`client-${index + 1}`} />
                ))}
            </div>
        </section>
    );
}