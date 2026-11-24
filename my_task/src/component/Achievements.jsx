import React from "react";
import stat1 from "../images/state1.png";
import stat2 from "../images/state2.png";
import stat3 from "../images/state3.png";
import stat4 from "../images/state4.png";

const statsData = [
    { id: 1, icon: stat1, number: '2,245,341', label: 'Members' },
    { id: 2, icon: stat2, number: '46,328', label: 'Clubs' },
    { id: 3, icon: stat3, number: '828,867', label: 'Event Bookings' },
    { id: 4, icon: stat4, number: '1,926,436', label: 'Payments' },
];

export default function Achievements() {
    return (
        <section className="achievements-section">
            <div className="achievements-text">
                <h2>Helping a local <br /> <span>business reinvent itself</span></h2>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="achievements-grid">
            {
                statsData.map((ele) => (
                    <div className="stat-item" key={ele.id}>
                        
                        <img src={ele.icon} alt={`state${ele.icon}`} />
                        
                        
                        <div className="stat-info">
                            <h3>{ele.number}</h3>
                            <p>{ele.label}</p>
                        </div>
                        
                    </div>
                ))
            }                
            </div>
        </section>
    )
}