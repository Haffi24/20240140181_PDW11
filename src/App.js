import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainBanner from './components/MainBanner';
import NewsSection from './components/NewsSection';
import HeroRoster from './components/HeroRoster';
import Footer from './components/Footer';
import HarperAssistant from './components/HarperAssistant';



function App() {
  return (
    <div className="game-website">
      <Navbar />
      <MainBanner />
      <NewsSection />
      <HeroRoster />



      <HarperAssistant />
      <Footer />
    </div>
  );
}

export default App;