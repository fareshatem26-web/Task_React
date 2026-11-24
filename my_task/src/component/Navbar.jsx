    import React from 'react';
    export default function Navbar() {
    const navLinks = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'Features', path: '#features' },
        { id: 3, title: 'Community', path: '#community' },
        { id: 4, title: 'Blog', path: '#blog' },
        { id: 5, title: 'Pricing', path: '#pricing' }
    ];

    return (
        <nav className="navbar">
        
        <div className="logo">
            <h2>Nexcent</h2>
        </div>

        <ul className="nav-links">
            {navLinks.map((ele) => (
            <li key={ele.id}>
                <a href={ele.path}>{ele.title}</a>
            </li>
            ))}
        </ul>

        <div className="nav-action">
            <button className="register-btn">Register Now</button>
        </div>
        </nav>
    );
    }