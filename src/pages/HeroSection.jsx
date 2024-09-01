import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gray-50 ml-4 w-full p-4 sm:p-8">
      
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto">
      
        <div className="flex-1 mb-6 lg:mb-0 lg:pr-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Discover Motion's Powerful Business Solutions
          </h1>
          <p className="text-gray-700 mt-2 text-base sm:text-lg">
            Unlock your business potential with Motion's innovative solutions
          </p>
          <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link to="/components/GetStarted">
              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
                Get Started
              </button>
            </Link>
          </div>
        </div>

       
        <div 
          className="md:flex  bg-gray-200 p-4 rounded-lg shadow-lg border  border-gray-200"
          style={{ maxHeight: '700px', maxWidth: '500px' }}
        >
          
          <div className=" bg-gray-300 p-4  md:w-[200px] rounded-t-lg lg:rounded-l-lg lg:rounded-t-none">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              We would love to hear from you! Please fill out the form below and we’ll get in touch with you shortly.
            </p>
          </div>
    
          <div className="flex-1 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4 rounded-b-lg lg:rounded-r-lg lg:rounded-b-none">
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
              >
                Send Message
              </button>
              <br />
              <br />
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
