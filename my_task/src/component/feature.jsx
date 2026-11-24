import React from 'react';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';

const featuresData = [
    { 
        id: 1, 
        icon: icon1, 
        title: 'Membership Organisations', 
        desc: 'Our membership management software provides full automation of membership renewals and payments' 
    },
    { 
        id: 2,
        icon: icon2, 
        title: 'National Associations', 
        desc: 'Our membership management software provides full automation of membership renewals and payments' 
    },
    { 
        id: 3, 
        icon: icon3, 
        title: 'Clubs And Groups', 
        desc: 'Our membership management software provides full automation of membership renewals and payments' 
    }
];

export default function Features() {
    return (
        <section className='features-section'>
            <div className="features-header">
                <h2>Manage your entire community <br /> in a single system</h2>
                <p>Who is Nextcent suitable for?</p>
            </div>

            <div className='features-cards'>
                {featuresData.map((ele) => (
                    <div key={ele.id} className="feature-card">
                        <img src={ele.icon} />
                        <h3>{ele.title}</h3>
                        <p>{ele.desc}</p>
                    </div>
                ))}

            </div>
        </section>
    )
}