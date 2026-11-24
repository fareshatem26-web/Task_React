import React from 'react';
import blog1 from '../images/card1.png';
import blog2 from '../images/card2.png';
import blog3 from '../images/card3.png';

const blogs = [
    {
        img: blog1,
        title: 'Creating Streamlined Safeguarding Processes with OneRen',
    },
    {
        img: blog2,
        title: 'What are your safeguarding responsibilities and how can you manage them?',
    },
    {
        img: blog3,
        title: 'Revamping the Membership Model with Triathlon Australia',
    },
    ];

export default function Blog() {
    return (
        <section className="blog-section">
        <div className="blog-header">
            <h2>Caring is the new marketing</h2>
            <p>
            The Nextcent blog is the best place to read about the latest membership
            insights, trends and more. See who's joining the community, read about
            how our community are increasing their membership income and lot's more.
            </p>
        </div>

        <div className="blog-cards">
            {blogs.map((item, index) => (
            <div className="blog-card" key={index}>
                <img src={item.img} alt={item.title} />
                <div className="blog-card-content">
                <h4>{item.title}</h4>
                <a href="#">
                    Readmore <span>→</span>
                </a>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}