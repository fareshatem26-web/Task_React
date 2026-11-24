import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <h2>Nexcent</h2>
                    </div>
                    <p>Copyright © 2020 Landify UI Kit.<br/>All rights reserved</p>
                    <div className="social-links">
                        <a href="#">📷</a>
                        <a href="#">🏀</a>
                        <a href="#">🐦</a>
                        <a href="#">▶️</a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
                </div>

                <div className="footer-subscribe">
                    <h3>Stay up to date</h3>
                    <div className="input-group">
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">✈️</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}