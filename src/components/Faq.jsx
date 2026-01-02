"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the Invitation Maker?",
    answer:
      "Invitation Maker is an online design tool that helps you create beautiful invitation cards for weddings, birthdays, parties, and events using ready-made templates and easy customization options.",
  },
  {
    question: "Can I customize invitation cards?",
    answer:
      "Yes! You can fully customize text, fonts, colors, images, and layouts to match your event theme and personal style.",
  },
  {
    question: "Do I need design skills to use it?",
    answer:
      "Not at all. Invitation Maker is beginner-friendly and designed for everyone. Simply choose a template and edit it in minutes.",
  },
  {
    question: "Can I download and share my invitations?",
    answer:
      "Absolutely! You can download your invitation cards in high-quality formats and easily share them via WhatsApp, email, or social media.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="bg-white py-6 md:py-16">
      <div className="MyContainer grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <div className="inline-flex mb-3 md:mb-6">
            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#A100FF] to-[#FF6B81]">
              <span className="block px-3 sm:px-4 py-1 text-xs sm:text-sm md:text-sm rounded-full bg-gradient-to-r from-[#f8edff] via-[#fbf1ff] to-[#fff1f5] text-[#A100FF] font-medium">
                FAQ’s
              </span>
            </div>
          </div>

          <h2 className="text-[28px] sm:text-[32px] md:text-[42px] font-extrabold leading-snug sm:leading-tight md:leading-tight text-black">
            Frequent Asked
            <br />
            Questions
          </h2>

          <p className="mt-2 sm:mt-4 text-[#1e1e1e] text-[14px] sm:text-[15px] md:text-[16px] md:text-[18px] leading-relaxed max-w-full md:max-w-md mx-auto md:mx-0">
            Find quick answers to questions about creating, customizing, and
            downloading invitations. Our FAQs help you get the most out of the
            invitation maker.
          </p>
        </div>

        {/* RIGHT FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  transition-all duration-300 overflow-hidden
                  ${isOpen ? "rounded-3xl" : "rounded-full"}
                  bg-gradient-to-r from-[#f8edff] via-[#fbf1ff] to-[#fff1f5]
                `}
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 text-left text-black font-medium text-[15px] sm:text-[16px] md:text-[18px]"
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`px-6 sm:px-8 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "opacity-100 pb-4 sm:pb-6"
                      : "opacity-0 pb-0 pointer-events-none"
                  }`}
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                  }}
                >
                  <p className="text-[#6B6B6B] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
