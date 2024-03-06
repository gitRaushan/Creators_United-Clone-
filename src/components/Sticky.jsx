import React from 'react';
import '../styles/StickyStyles.css'

const Sticky = () => {
  return (
    <div className="social-media-icons">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src="/images/instagram.webp" alt="Instagram" />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <img src="/images/youtube.webp" alt="YouTube" />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src="/images/facebook.webp" alt="Facebook" />
      </a>
    </div>
  );
}

export default Sticky;
