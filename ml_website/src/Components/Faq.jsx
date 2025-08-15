import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Question",
      answer: "Answer",
    },
    {
      question: "Question",
      answer: "Answer",
    },
    {
      question: "Question",
      answer: "Answer",
    },
    {
      question: "Question",
      answer: "Answer",
    },
    {
      question: "Question",
      answer: "Answer",
    },
    {
      question: "Question",
      answer: "Answer",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div class="flex justify-center items-center mt-30 mb-10">
            <div class="font-extrabold text-xl sm:text-2xl md:text-3xl text-red-400 text-center bg-gray-700 p-6 rounded-4xl border-r-9 border-b-9  border-red-300 hover:text-gray-700 hover:border-gray-500 relative inline-block overflow-hidden group">
              <h2 class="relative z-10">Frequently Asked Questions</h2>

              <span class="absolute inset-0 bg-red-400 translate-y-full transition-transform duration-700 ease-in-out group-hover:translate-y-0"></span>
            </div>
          </div>
           </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our Global AI Buildathon
          </p>
       

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm border border-red-400 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:border-b-2 focus:border-b-red-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-red-600 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-red-400 transition-transform duration-200" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 p-8 rounded-3xl bg-gray-700 text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            Our team is here to help. Get in touch and we'll answer any
            questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 border-2 border-red-400 font-semibold rounded-full bg-white text-red-400">
              Contact us at girlsleadingtech@gmail.com
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
