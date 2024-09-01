import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import FleetManagement from './pages/FleetManagement'
import FuelCard from './components/FuelCard';
import Factoring from './components/Factoring';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import GetStarted from './components/GetStarted';
import HeroSection from './pages/HeroSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/components/FuelCard" element={<div><FuelCard/></div>} />
        <Route path="/components/Factoring" element={<div><Factoring/></div>} />
        <Route path="/pages/FleetManagement" element={<FleetManagement/>} />
        <Route path="/get-started" element={<div>Get Started Page</div>} />
        <Route path="/components/LoginPage" element={<div><LoginPage/></div>} />
        <Route path="/components/SignUpPage" element={<div><SignUpPage/></div>} />
        <Route path="/components/GetStarted" element={<div><GetStarted/></div>} />
        <Route path="/pages/HeroSection" element={<div><HeroSection/></div>} />
        
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
