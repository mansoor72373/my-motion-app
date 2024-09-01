import React from 'react';
import { Link } from 'react-router-dom';
import truckImage from '../images/1.jpeg'; 

const MotionPromo = () => {
  return (
    <div className="bg-white p-4 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center max-w-full mx-auto">
        <div className="w-full md:w-1/2">
          <img
            src={truckImage}
            alt="Motion Truck"
            className="w-full md:w-[550px] rounded-lg h-auto md:h-[350px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8">
          <h2 className="text-blue-700 font-bold text-lg md:text-xl mb-4">INNOVATE</h2>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-snug md:leading-tight">
            Enhance Your Business with Motion's Tailored Solutions
          </h1>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Join over 1000 companies in the logistics sector who trust Motion to enhance operational efficiencies and grow profitability. Our innovative and tailored solutions adapt to your unique challenges, powering your business potential.
          </p>
          <div className="flex flex-col md:flex-row mb-6 space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-1">
              <h3 className="font-bold text-base md:text-lg">Fuel Efficiency</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Unlock savings and enhance profitability with our comprehensive perspective on fleet operations and expenditures.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base md:text-lg">Working Capital</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Fuel your growth with invoice factoring and unlock your working capital for business expansion.
              </p>
            </div>
          </div>
          <Link to="/components/GetStarted">
            <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 text-sm md:text-base">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MotionPromo;
