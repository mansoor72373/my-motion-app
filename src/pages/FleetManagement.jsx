import React from 'react';
import { Link } from 'react-router-dom';

const FleetManagement = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <section className="bg-blue-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Streamline Your Operations with Our Fleet Management Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl">
            Optimize your fleet's performance, reduce operational costs, and ensure safety with our comprehensive fleet management tools.
          </p>
          <div className="mt-8">
            <Link to="/components/GetStarted">
              <button className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 text-base sm:text-lg">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

  
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Key Features of Our Fleet Management System
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Explore the powerful tools and features designed to keep your fleet running smoothly and efficiently.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-blue-700 mb-4">
                Real-Time Tracking
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Monitor your fleet in real-time with GPS tracking, ensuring that you always know where your vehicles are.
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-4">
                Maintenance Scheduling
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Keep your vehicles in top condition with automated maintenance scheduling and reminders.
              </p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-yellow-700 mb-4">
                Fuel Management
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Track and optimize fuel usage, reduce costs, and improve fuel efficiency across your fleet.
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-purple-700 mb-4">
                Compliance Management
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Ensure compliance with regulations by automating record-keeping and staying ahead of deadlines.
              </p>
            </div>
            <div className="bg-orange-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-orange-700 mb-4">
                Driver Safety Monitoring
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Monitor driver behavior and promote safety with real-time alerts and detailed reports.
              </p>
            </div>
            <div className="bg-red-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-4">
                Route Optimization
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Plan and optimize routes to reduce travel time, save on fuel, and enhance delivery efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            What Our Clients Say About Us
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <p className="text-sm sm:text-base text-gray-600">
                "Our fleet's efficiency has improved dramatically since we started using their fleet management system. It's an indispensable tool for our operations."
              </p>
              <p className="mt-4 text-gray-900 font-bold">- Michael Brown, Operations Manager</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-lg">
              <p className="text-sm sm:text-base text-gray-600">
                "The real-time tracking and maintenance features have saved us countless hours and reduced vehicle downtime significantly."
              </p>
              <p className="mt-4 text-gray-900 font-bold">- Sarah Johnson, Fleet Coordinator</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-lg">
              <p className="text-sm sm:text-base text-gray-600">
                "Their fleet management system is a game-changer. We've seen a noticeable improvement in fuel efficiency and route planning."
              </p>
              <p className="mt-4 text-gray-900 font-bold">- David Lee, Logistics Director</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-blue-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Ready to Optimize Your Fleet?
          </h2>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-blue-200">
            Contact us today to learn how our fleet management solutions can help you achieve operational excellence.
          </p>
          <div className="mt-8">
            <Link to="/components/GetStarted">
              <button className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 text-base sm:text-lg">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FleetManagement;
