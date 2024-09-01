import React from 'react';
import { Link } from 'react-router-dom';
import MotionImage from '../images/1.jpeg';

const GetStarted = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-4">
      
      <div className="flex justify-center md:justify-end mb-4 md:mb-0 relative w-full md:w-[550px]">
        <div className=" w-full ">
          <img
            src={MotionImage}
            alt="Motion"
            className="w-full h-auto md:w-[550px] md:h-[350px] rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center p-6 bg-white bg-opacity-90 rounded-lg shadow-xl md:h-[350px] md:w-[550px] transform md:translate-x-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to <span className="text-teal-500">Motion</span>
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-8">
          The best place to start managing your motion projects with ease and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/components/LoginPage"
            className="bg-purple-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
