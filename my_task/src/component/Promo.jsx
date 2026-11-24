import React from "react";
import promoImg from "../images/promoImg.png";
export default function Promo() {
    return (
        <section className="promo-section">
            <div className="promo-image">
                <img src={promoImg} alt="Site Footer Design" />
            </div>
            <div className="promo-text">
                <h2>How to design your site footer like we did</h2>
                <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className="btn1">Learn More</button>
            </div>
        </section>
    )
}