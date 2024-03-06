import React from 'react'
import "../styles/HeroSection.css"
import {Link} from 'react-router-dom'
import HeroSliders from './HeroSliders';


const HeroSection = () => {

    const imageCards = [
        { imageUrl: "images/card1.webp", text: "", link: "#" },
        { imageUrl: "images/card2.webp", text: "", link: "#" },
        { imageUrl: "images/card3.webp", text: "", link: "#" },
        { imageUrl: "images/card4.webp", text: "", link: "#" },
        { imageUrl: "images/card5.webp", text: "", link: "#" },
        { imageUrl: "images/card6.webp", text: "", link: "#" },
        { imageUrl: "images/card7.webp", text: "", link: "#" },
        { imageUrl: "images/card8.webp", text: "", link: "#" },
    ]
  return (
    <div className="hero-section">
      <div className='banner'>
        <Link to="/fest">
        <img src="images/image.webp" alt="Festival" />
      </Link>
      </div>
      <div className='things'>
        <p>THINGS NOT TO 
        <br />
       <span className='mo'> MISS OUT</span>
        </p>
      </div>
      <div className='card'>
        
        {imageCards.map((card, index) => (
          <div className="image-card" key={index}>
            <Link to={card.link}>
              <img src={card.imageUrl} alt={`Image ${index + 1}`} />
            </Link>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
   <div className='slider'><HeroSliders/></div>
   
    </div>
    
  );
};

export default HeroSection