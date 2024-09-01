import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupPage = () => {
  const [isSignedUp, setIsSignedUp] = useState(false); 
  const navigate = useNavigate(); 

  
  const handleSignUp = (values) => {
    console.log('Form Values:', values);
    setIsSignedUp(true);
    navigate('/components/LoginPage');
  };

 
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required'),
      username: Yup.string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters long'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    }),
    onSubmit: handleSignUp,
  });

  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-4 md:p-8 rounded-lg shadow-lg  mx-auto">
      <div className="w-full   md:w-[550px] md:h-[350px] bg-gray-800 text-white p-6 md:p-16 rounded-lg mb-6 md:mb-0">
        <h2 className="text-xl md:text-2xl font-bold  mb-4">Join Motion Today!</h2>
        <p className="mb-6">Sign up to discover and manage your business's full potential with Motion's tailored solutions.</p>
        <Link to="/components/LoginPage">
          <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
            Back to Login
          </button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-12">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Create Your Account</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.name && formik.errors.name ? 'border-red-500' : ''
              }`}
              id="name"
              type="text"
              placeholder="Enter your name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
            ) : null}
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : ''
              }`}
              id="email"
              type="email"
              placeholder="Enter your email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
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
              placeholder="Create a password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
