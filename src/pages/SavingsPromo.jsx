import React from 'react';
import { Link } from 'react-router-dom';
import TruckImage from '../images/3.jpeg'; 

const SavingsPromo = () => {
  return (
    <div className="bg-white  p-6 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h2 className="text-blue-700 font-bold text-xs md:text-sm mb-4">DISCOVER</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug md:leading-tight">
            Unlock Savings and Enhance Profitability with Motion
          </h1>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Join leaders in the logistics sector who trust Motion to enhance operational efficiencies and grow profitability. Our tailored solutions adapt to your unique challenges, powering potential through innovation and expertise.
          </p>
          <div className="flex flex-col md:flex-row mb-6 space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-1">
              <h3 className="font-bold text-lg">Fuel Network</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Gain a comprehensive perspective on fleet operations and expenditures to unlock savings and enhance profitability.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Factoring</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Fuel Your Growth with Invoice Factoring: Unlock Your Working Capital.
              </p>
            </div>
          </div>
          <Link to="/components/GetStarted">
            <button className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 text-sm md:text-base">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full md:w-[550px] md:h-[350px] h-[350px] p-4">
          <img
            src={TruckImage}  
            alt="Motion Truck"
            className="w-full md:w-[550px] rounded-lg h-auto md:h-[350px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SavingsPromo;
