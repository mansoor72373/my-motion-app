import React from 'react';
import { Link } from 'react-router-dom';

function Redesign() {
  return (
    <div className="bg-white p-4 ml-4  py-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
       
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-blue-600 font-bold text-base md:text-lg lg:text-xl uppercase">Empower</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mt-2 md:mt-4">
            Streamline Your Business with Motion's Tailored Solutions
          </h2>
          <p className="mt-2 md:mt-4 text-gray-600 text-sm md:text-base">
            Motion offers fuel cards, fleet management, and financial solutions
            that are specifically designed to meet the needs of your business. Our
            innovative and expert-driven approach helps you enhance operational
            efficiencies and grow profitability.
          </p>
          <Link to="/components/GetStarted">
            <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 mt-4">
              Get Started
            </button>
          </Link>
        </div>

       
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
       
          <div className="flex flex-col items-start p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
            <div className="bg-blue-600 text-white p-2 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m4-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Fuel Cards to Optimize Your Fleet Operations
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Gain a comprehensive perspective on fleet operations and
              expenditures to unlock savings and enhance profitability.
            </p>
          </div>

       
          <div className="flex flex-col items-start p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
            <div className="bg-blue-600 text-white p-2 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c.837 0 1.556-.252 2.125-.668M15 3v5a2 2 0 01-2 2H7a2 2 0 01-2-2V3m10 0a9 9 0 11-4 8m3 0H9m4 8H5a2 2 0 01-2-2V7"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Financial Solutions for Your Business Growth
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Fuel your growth with invoice factoring and unlock your working
              capital.
            </p>
          </div>

       
          <div className="flex flex-col items-start p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
            <div className="bg-blue-600 text-white p-2 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m2 0a6 6 0 100-12H7a6 6 0 100 12m2-3h8"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Efficient Fleet Management for Better Performance
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Take control of your fleet with real-time insights for better
              performance and cost savings.
            </p>
          </div>

        
          <div className="flex flex-col items-start p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm">
            <div className="bg-blue-600 text-white p-2 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v4a2 2 0 01-2 2h-5a2 2 0 01-2-2H7a2 2 0 01-2-2V9a2 2 0 012-2h2m0-5h8m-4 0h-8"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Trusted by 1000+ Companies in the Logistics Sector
            </h3>
            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Join leaders in the logistics sector who trust Motion to enhance
              operational efficiencies and grow profitability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Redesign;
