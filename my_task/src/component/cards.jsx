import React from "react";
import card1 from '../images/card1.png' 
import card2 from '../images/card2.png' 
import card3 from '../images/card3.png' 

const blogsData = [
    { 
        id: 1, 
        image: card1, 
        title: 'Creating Streamlined Safeguarding Processes with OneRen' 
    },
    { 
        id: 2, 
        image: card2, 
        title: 'What are your safeguarding responsibilities and how can you manage them?' 
    },
    { 
        id: 3, 
        image: card3, 
        title: 'Revamping the Membership Model with Triathlon Australia' 
    }
];
export default function Blog() {
    return (
        <section className="blog-section">
            <div className="blog-header">
                <h2>Caring is the new marketing</h2>
                <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
            </div>
            <div className="blog-cards">
            {
                blogsData.map((ele) => (
                    <div key={ele.id} className="blog-item">
                        <img src={ele.image} alt="card" />                        
                        <div className="blog-content">
                            <h3>{ele.title}</h3>
                            <a href="#">Readmore <span>→</span></a>
                        </div>
                        
                    </div>
                ))
            }
            </div>
        </section>
    )
}