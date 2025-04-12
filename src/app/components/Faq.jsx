"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in the trekking package?",
      answer:
        "Our package includes accommodation during the trek (camping/tents), all vegetarian meals, trek leader and support staff, basic medical assistance, and sleeping bags. Transport to and from the base location may be extra unless specified.",
    },
    {
      question: "What should I pack for the trek?",
      answer:
        "We recommend packing a sturdy backpack, layered clothing, waterproof jacket, trekking shoes, thermal wear, personal toiletries, and a refillable water bottle. A full checklist is provided upon booking.",
    },
    {
      question: "Do I need prior trekking experience?",
      answer:
        "No prior experience is required for moderate-level treks like Sar Pass. However, being physically active and fit is advised. We guide you throughout the trail to ensure safety and enjoyment.",
    },
    {
      question: "Is the trek suitable for solo travelers?",
      answer:
        "Absolutely! Many of our trekkers are solo adventurers. It’s a great way to meet like-minded people and share the experience in a safe group environment.",
    },
    {
      question: "What happens in case of cancellation?",
      answer:
        "You can cancel up to 7 days before the trek start date for a partial refund. For full details, please refer to our cancellation policy on the booking page.",
    },
    // {
    //   question: "How safe is the trek? Are guides trained?",
    //   answer:
    //     "Your safety is our top priority. Our trek leaders are certified, trained in first-aid, and experienced in handling high-altitude conditions. Emergency protocols are in place throughout the journey.",
    // },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#393849]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-800 font-medium text-base sm:text-lg focus:outline-none"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-orange-500" : "text-[#393849]"
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 bg-blue-50 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
