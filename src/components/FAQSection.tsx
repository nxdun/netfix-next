"use client";

import { useState } from "react";
import Image from "next/image";
import mockData from "@/data/mockData.json";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-black text-white">
      <h2 className="text-3xl sm:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      
      <div className="mx-auto space-y-2">
        {mockData.faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`bg-[#2D2D2D] mb-2 rounded transition-colors duration-300 ${
              openIndex === index ? "" : "hover:bg-[#3A3A3A]"
            }`}
          >
            <button 
              className="w-full p-5 text-left flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-3xl font-medium">{faq.question}</span>
              <div className={`transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                <Image 
                  src="/faq-plus-button.svg" 
                  alt="Toggle FAQ" 
                  width={24} 
                  height={24}
                />
              </div>
            </button>
            
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-5 pt-2 mt-2 border-t-2 border-black text-3xl text-gray-200">
              {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
