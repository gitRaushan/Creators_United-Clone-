import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import News from './pages/News';
import Entertainment from './pages/Entertainment';
import Influencer from './pages/Influencer';
import WhatsHot from './pages/WhatsHot';
import Fest from './pages/Fest';
import Popular from './components/popular'

import './App.css'
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Trending from './components/Trending';
import Sticky from './components/Sticky';
import Sidebar from './components/Sidebar';
import Pop from './components/Pop';

const App = () => {
  return (
      
      <div className='container'>
        <Header />
        
        
        <HeroSection/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/influencer" element={<Influencer />} />
          <Route path="/whatshot" element={<WhatsHot />} />
          <Route path="/fest" element={<Fest />} />
        </Routes>
        <Sticky/>
        
        <Trending/>
        <Pop/>
        <Popular/>
        
       <Sidebar/>
        <Footer/>
      </div>
      
    
  );
};

export default App;
