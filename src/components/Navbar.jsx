import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative">
      {/* Sidebar for mobile */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full bg-white p-4">
          <button onClick={toggleSidebar} className="text-gray-600 text-2xl self-end">&times;</button>
          <Link to="/components/FuelCard" className="text-gray-600 hover:text-blue-500 py-2" onClick={handleLinkClick}>Fuel Card</Link>
          <Link to="/components/Factoring" className="text-gray-600 hover:text-blue-500 py-2" onClick={handleLinkClick}>Factoring</Link>
          <Link to="/pages/FleetManagement" className="text-gray-600 hover:text-blue-500 py-2" onClick={handleLinkClick}>Fleet Management</Link>
          <Link to="/components/GetStarted" className="text-teal-500 hover:text-teal-600 py-2" onClick={handleLinkClick}>Get Started</Link>
          <Link to="/pages/HeroSection" className="text-gray-600 hover:text-blue-500 py-2" onClick={handleLinkClick}>Contact Us</Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white p-4 border-b flex justify-between items-center">
        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleSidebar} className="text-2xl text-gray-600 lg:hidden">
          &#9776;
        </button>
        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/components/FuelCard" className="text-gray-600 hover:text-blue-500">Fuel Card</Link>
          <Link to="/components/Factoring" className="text-gray-600 hover:text-blue-500">Factoring</Link>
          <Link to="/pages/FleetManagement" className="text-gray-600 hover:text-blue-500">Fleet Management</Link>
        </div>
        <Link to="/" className="text-2xl font-bold">motion</Link>
        <div className="hidden lg:flex space-x-4">
          <Link to="/components/GetStarted" className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">Get Started</Link>
          <Link to="/pages/HeroSection">
            <button className="bg-white text-black py-2 px-4 rounded-lg border-[2px] hover:bg-slate-300">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
