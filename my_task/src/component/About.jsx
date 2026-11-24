import React from "react";
import unlockImg from "../images/unlockImg.png";

export default function About() {
    return (
        <section className="about-section">
        <div className="about-img">
            <img src={unlockImg} alt="unlock" />
        </div>
        <div className="about-content">
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
            justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque
            placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
            Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa
            pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar
            odio.
            </p>
            <button className="btn1">Learn More</button>
        </div>
        </section>
    );
    }