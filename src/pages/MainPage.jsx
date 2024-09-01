import React from 'react';
import MotionPromo from './MotionPromo';
import SavingsPromo from './SavingsPromo';
import MotionSolutions from './MotionSolutions';
import HeroSection from './HeroSection';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className='w-full'>
      <div className="text-center p-4 md:p-8 bg-white">
        <h3 className="text-blue-500 font-semibold text-base md:text-lg">
          Fuel Cards, Fleet Management, Financial Solutions Tailored to Your Business
        </h3>
        <h1 className="text-2xl md:text-4xl font-bold mt-2 md:mt-4 mb-4">
          Keep Moving with Motion
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-8 mx-auto max-w-xs md:max-w-xl">
          Join leaders in the logistics sector who trust Motion to enhance operational efficiencies and grow profitability. 
          Our tailored solutions adapt to your unique challenges, powering potential through innovation and expertise.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-8">
          <Link to="/components/GetStarted">
            <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
              Get Started
            </button>
          </Link>
          <Link to="/pages/HeroSection">
            <button className="bg-white text-black py-2 px-4 rounded-lg border-2 hover:bg-slate-300">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 text-gray-700 text-sm md:text-base">
          <div>✔️ Trusted by 1000+ companies</div>
          <div>✔️ Top Discounts Across North America</div>
          <div>✔️ Fastest delivery times</div>
        </div>
      </div>
      <MotionPromo />
      <SavingsPromo />
      <MotionSolutions />
      <HeroSection />
    </div>
  );
};

export default MainPage;
