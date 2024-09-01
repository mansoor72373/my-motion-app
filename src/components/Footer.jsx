import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white w-full  py-6">
      
      <div className="container  mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          
          <div className="text-gray-900 font-bold text-xl mb-4 sm:mb-0">
            motion
          </div>

          <div className="flex flex-col sm:flex-row items-center text-gray-700 mb-4 sm:mb-0">
            <Link to="/components/FuelCard" className="hover:text-gray-900 mb-2 sm:mb-0 sm:mr-4">Fuel Card</Link>
            <Link to="/components/Factoring" className="hover:text-gray-900 mb-2 sm:mb-0 sm:mr-4">Factoring</Link>
            <Link to="/pages/FleetManagement" className="hover:text-gray-900">Fleet Management</Link>
          </div>

          <div className="flex space-x-4 text-gray-700">
            <a href="https://www.facebook.com" className="hover:text-gray-900" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" className="hover:text-gray-900" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="hover:text-gray-900" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.snapchat.com" className="hover:text-gray-900" aria-label="Snapchat">
              <FaSnapchatGhost />
            </a>
            <a href="https://www.youtube.com" className="hover:text-gray-900" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 text-gray-600 text-sm">
            
            <div>
              © 2024 Motion. All rights reserved.
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Service</a>
              <a href="#" className="hover:text-gray-900">Cookies Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
