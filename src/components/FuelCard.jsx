import React from 'react';
import { Link } from 'react-router-dom';

const FuelCard = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
     
      <section className="bg-gray-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Fuel Card Solutions to Power Your Fleet
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl">
            Save on fuel costs, manage expenses, and optimize your fleet's performance with our fuel card.
          </p>
          <div className="mt-8">
            <Link to="/components/SignUpPage">
              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
                Get Your Fuel Card
              </button>
            </Link>
          </div>
        </div>
      </section>

  
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Why Choose Our Fuel Card?
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-700">
            Discover the advantages of our fuel card and how it can benefit your business.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">
                Save on Fuel Costs
              </h3>
              <p className="text-white text-sm sm:text-base lg:text-lg">
                Enjoy discounts on fuel purchases and reduce your overall operating costs.
              </p>
            </div>
            <div className="bg-green-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">
                Detailed Reporting
              </h3>
              <p className="text-white text-sm sm:text-base lg:text-lg">
                Get comprehensive reports on fuel usage to help manage and optimize your fleet's performance.
              </p>
            </div>
            <div className="bg-purple-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">
                Nationwide Coverage
              </h3>
              <p className="text-white text-sm sm:text-base lg:text-lg">
                Access fuel stations across the country, ensuring your fleet is always on the move.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Key Features of Our Fuel Card
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-red-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">
                Fuel Price Lock
              </h3>
              <p className="text-white text-sm sm:text-base lg:text-lg">
                Lock in fuel prices to protect your business from price fluctuations.
              </p>
            </div>
            <div className="bg-yellow-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
                Easy to Manage
              </h3>
              <p className="text-gray-800 text-sm sm:text-base lg:text-lg">
                Manage all your fuel card transactions through a user-friendly online portal.
              </p>
            </div>
            <div className="bg-orange-500 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">
                Secure Transactions
              </h3>
              <p className="text-white text-sm sm:text-base lg:text-lg">
                Enjoy peace of mind with secure transactions and fraud protection features.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-sm sm:text-base lg:text-lg">
                "The fuel card has been a game-changer for our fleet operations. We've seen significant savings and the reporting is incredibly useful."
              </p>
              <p className="mt-4 text-gray-800 font-bold text-sm sm:text-base lg:text-lg">- Alex Brown, Fleet Manager</p>
            </div>
            <div className="bg-green-200 p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-sm sm:text-base lg:text-lg">
                "With the nationwide coverage, our drivers have no trouble finding fuel stations wherever they go."
              </p>
              <p className="mt-4 text-gray-800 font-bold text-sm sm:text-base lg:text-lg">- Samantha Green, Logistics Coordinator</p>
            </div>
            <div className="bg-purple-200 p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-sm sm:text-base lg:text-lg">
                "The fuel price lock feature has helped us maintain stable fuel costs even during market volatility."
              </p>
              <p className="mt-4 text-gray-800 font-bold text-sm sm:text-base lg:text-lg">- Michael Johnson, Operations Director</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-gray-800 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Ready to Save on Fuel Costs?
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300">
            Contact us today to learn more about how our fuel card can benefit your business.
          </p>
          <div className="mt-8">
            <Link to="/components/SignUpPage">
              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuelCard;
