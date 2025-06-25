import React, { useState } from "react";

const Pricing = () => {
  const [activePlan, setActivePlan] = useState("Monthly");

  return (
    <div className="bg-gray-50 py-10 px-4">
      {/* Pricing Header */}
      <div className="text-center">
        <h2 className="text-orange-500 text-sm font-semibold uppercase tracking-wide">
          Pricing Plan
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">
          Choose your pricing policy
        </h3>
      </div>

      {/* Plan Toggle */}
      <div className="flex justify-center space-x-4 my-6">
        <button
          className={`py-2 px-6 rounded-full text-sm font-medium ${
            activePlan === "Monthly"
              ? "bg-white shadow text-gray-900"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActivePlan("Monthly")}
        >
          Monthly Plan
        </button>
        <button
          className={`py-2 px-6 rounded-full text-sm font-medium ${
            activePlan === "Annual"
              ? "bg-white shadow text-gray-900"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setActivePlan("Annual")}
        >
          Annual Plan
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm">
          <h4 className="text-lg font-semibold">Free Plan</h4>
          <p className="text-sm text-gray-500 mb-4">For Small teams or office</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Ultimate access to all course, exercises and assessments
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Free access for all kind of exercise corrections with downloads
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Total assessment corrections with free download access system
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✘</span>
              Unlimited download of courses on the mobile app contents
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✘</span>
              Download and print courses and exercises in PDF
            </li>
          </ul>
          <button className="w-full py-2 bg-transparent border border-orange-300 text-orange-500 rounded-md font-medium hover:bg-orange-100">
            Start free trial
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white border-2 border-green-400 rounded-xl p-6 text-left shadow-sm relative">
          <div className="absolute top-0 left-4 -mt-3 px-3 py-1 bg-orange-500 text-white text-xs uppercase rounded-md">
            Recommended
          </div>
          <h4 className="text-lg font-semibold">Premium</h4>
          <p className="text-sm text-gray-500 mb-4">For startup enterprise</p>
          <p className="text-gray-700 text-sm mb-4">
            Starting from{" "}
            <span className="text-2xl font-bold text-green-500">$49.99/mo</span>
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Ultimate access to all course, exercises and assessments
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Free access for all kind of exercise corrections with downloads
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Total assessment corrections with free download access system
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Unlimited download of courses on the mobile app contents
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Download and print courses and exercises in PDF
            </li>
          </ul>
          <button className="w-full py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;