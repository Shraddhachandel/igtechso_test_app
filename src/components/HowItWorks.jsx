import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Set disbursement Instructions",
      description: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
      number: "02",
      title: "Assembly retrieves funds from your account",
      description: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
      number: "03",
      title: "Assembly initiates disbursement",
      description: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
    {
      number: "04",
      title: "Customer receives funds payment",
      description: "Get your blood tests delivered at home collect a sample from the your blood tests.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-35 to-blue-100 py-16 px-4">
  
      <div className="text-center mb-12">
        <h5 className="text-orange-500 text-sm uppercase tracking-wide font-semibold">
          What's the function
        </h5>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Let's see how it works
        </h2>
      </div>

 
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-8 md:space-y-0 md:space-x-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center">
        
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-lg font-bold text-gray-900">
              {step.number}
            </div>

        
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-[-4.5rem] transform translate-y-[-50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 70 20"
                  className="w-20 h-5"
                >
                  <path
                    d="M0 10c15-5 35-5 50 0s20 5 20 5"
                    stroke="#C5C5C5"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            )}

          
            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 max-w-[200px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;