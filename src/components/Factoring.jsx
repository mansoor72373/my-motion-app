import React from 'react';
import { Link } from 'react-router-dom';

const Factoring = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      <section className="bg-green-700 py-8 sm:py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Boost Your Business Cash Flow with Our Factoring Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            Get immediate access to working capital by converting your invoices into cash, and keep your business moving forward.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link to="/components/GetStarted">
              <button className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700">
                Get Started Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Why Choose Our Factoring Services?
          </h2>
          <p className="mt-4 text-base sm:text-gray-600">
            Discover the benefits of factoring and how it can help your business thrive.
          </p>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-blue-500 p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                Improve Cash Flow
              </h3>
              <p className="text-white text-sm sm:text-base">
                Turn unpaid invoices into immediate cash, improving your cash flow and ensuring smooth operations.
              </p>
            </div>
            <div className="bg-green-500 p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                No Debt Incurred
              </h3>
              <p className="text-white text-sm sm:text-base">
                Unlike traditional loans, factoring doesn’t add debt to your balance sheet, keeping your financials healthy.
              </p>
            </div>
            <div className="bg-purple-500 p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                Flexible Funding
              </h3>
              <p className="text-white text-sm sm:text-base">
                Access as much or as little capital as you need based on your outstanding invoices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            How Our Factoring Services Work
          </h2>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-yellow-500 p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">
                Submit Invoices
              </h3>
              <p className="text-gray-800 text-sm sm:text-base">
                Submit your unpaid invoices to us, and we'll advance you up to 90% of the invoice value.
              </p>
            </div>
            <div className="bg-orange-500 p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">
                Get Funded Fast
              </h3>
              <p className="text-gray-800 text-sm sm:text-base">
                Receive funds within 24-48 hours, helping you maintain steady cash flow.
              </p>
            </div>
            <div className="bg-red-500 p-4 sm:p-6 rounded-lg shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                We Collect Payments
              </h3>
              <p className="text-white text-sm sm:text-base">
                We take on the responsibility of collecting payments from your customers, freeing up your time and resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-blue-100 p-4 sm:p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-sm sm:text-base">
                "Factoring has been a lifeline for our business. The ability to access cash quickly has allowed us to take on new projects without worrying about cash flow."
              </p>
              <p className="mt-2 sm:mt-4 text-gray-900 font-bold">- John Doe, CEO</p>
            </div>
            <div className="bg-green-100 p-4 sm:p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-sm sm:text-base">
                "The process is straightforward and hassle-free. We've been able to focus on growing our business while they handle the collections."
              </p>
              <p className="mt-2 sm:mt-4 text-gray-900 font-bold">- Jane Smith, CFO</p>
            </div>
            <div className="bg-purple-100 p-4 sm:p-6 rounded-lg shadow-lg">
              <p className="text-gray-800 text-sm sm:text-base">
                "I highly recommend their factoring services. It’s a perfect solution for businesses that need flexible funding without the burden of additional debt."
              </p>
              <p className="mt-2 sm:mt-4 text-gray-900 font-bold">- Alex Johnson, Business Owner</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-8 sm:py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to Improve Your Cash Flow?
          </h2>
          <p className="mt-4 text-green-100 text-base sm:text-lg">
            Contact us today to find out how our factoring services can help your business thrive.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link to="/components/GetStarted">
              <button className="bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700">
                Get Started Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Factoring;
