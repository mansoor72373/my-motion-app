import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const [isSignedUp, setIsSignedUp] = useState(false); 
  const navigate = useNavigate();

  
  const checkSignUpStatus = () => {
   
    return isSignedUp;
  };

  
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    }),
    onSubmit: (values) => {
      if (!checkSignUpStatus()) {
        
        navigate('/components/SignUpPage');
        return;
      }

     
      console.log('Form Values:', values);
    },
  });

  return (
    <div className="flex md:ml-20 flex-col md:flex-row items-center bg-white p-6 md:p-8 rounded-lg shadow-lg w-full  mx-auto">
      <div className="w-full md:w-[550px]  md:h-[350px] lg:w-1/3 p-6 md:p-8 bg-gray-800 text-white rounded-lg mb-8 md:mb-0">
        <h2 className="text-xl md:text-2xl font-bold mb-4">We haven't met before right?</h2>
        <p className="text-sm md:text-base mb-6">
          Then you should try us! From Vancouver to Auckland, Motion is used by millions every day to decide where to eat in over 10,000 cities across 23 countries.
        </p>
        <Link to="/components/SignUpPage">
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="w-full md:w-[550px] ml-10 p-6 md:p-8">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Welcome back to Motion!</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.username && formik.errors.username ? 'border-red-500' : ''
              }`}
              id="username"
              type="text"
              placeholder="Enter your username"
              {...formik.getFieldProps('username')}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="text-red-500 text-xs italic">{formik.errors.username}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.password && formik.errors.password ? 'border-red-500' : ''
              }`}
              id="password"
              type="password"
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
            ) : null}
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 mb-4 md:mb-0">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
