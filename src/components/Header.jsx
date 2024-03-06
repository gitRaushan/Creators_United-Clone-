import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/HeaderStyles.css"

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav className='navbar-container'>
        <div className="firsts"> 
          <img src="images\logo.webp" alt="logo" />
          <p>It all starts with you</p>
        </div>
        <div className="second">
          <div className='search-container'>
            <img src="images\searchIcon.webp" alt="search" className="search-icon" />
            <input type="text" placeholder='Search' />
          </div>
        </div>
        
        <ul>
          <li style={location.pathname === '/' ? { textDecoration: 'underline', color: '#ff7f50' } : {}}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/news' ? 'active' : ''}>
            <Link to="/news">News</Link>
          </li>
          <li className={location.pathname === '/entertainment' ? 'active' : ''}>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li className={location.pathname === '/influencer' ? 'active' : ''}>
            <Link to="/influencer">Influencer</Link>
          </li>
          <li className={location.pathname === '/whatshot' ? 'active' : ''}>
            <Link to="/whatshot">What's Hot</Link>
          </li>
          <li className={location.pathname === '/fest' ? 'active' : ''}>
            <Link to="/fest">Fest</Link>
          </li>
        </ul>
        <div className="login">
          <button type='login'>
          <a href="/login">Login</a>
            </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;