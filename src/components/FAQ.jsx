import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is included in the course?",
      answer:
        "The course includes video tutorials, downloadable resources, quizzes, and assignments to practice design concepts.",
    },
    {
      question: "Is the course beginner-friendly?",
      answer:
        "Yes, it is designed for beginners with step-by-step guidance throughout the learning journey.",
    },
    {
      question: "Do I get a certificate after completion?",
      answer:
        "Yes, a certificate will be awarded upon successfully completing all modules and final assessment.",
    },
    {
      question: "Will I get lifetime access?",
      answer:
        "Absolutely! Once enrolled, you will have lifetime access to all course materials and future updates.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 flex flex-col items-center space-y-12">

      {/* Accordion Only */}
      <div className="w-[900px] bg-white rounded-md shadow-md p-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Frequently Asked Questions
        </h2>
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left py-3 font-medium text-gray-800 flex justify-between items-center"
            >
              {item.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="text-gray-600 pb-4 pl-1 pr-4">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
``
      {/* <div className="w-[908px] h-[241px] rounded-[5px] overflow-hidden shadow"> */}
    
   <section className="w-[908px] h-[241px] bg-white-50 py-20 flex flex-col items-center justify-center">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center leading-snug">
        Ready to learn design <br />
        with Nia Matos
      </h1>

      {/* Button */}
      <button className="mt-6 bg-orange-100 hover:bg-orange-200 text-orange-500 font-medium py-3 px-6 rounded-md transition-all">
        Start Learning Today
      </button>
    </section>
    </section>
  );
};

export default FAQ;