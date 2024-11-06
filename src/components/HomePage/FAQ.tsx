"use client";
import React, { useState } from "react";
import Plus from "../Icons/Plus";
import Minus from "../Icons/Minus";
import { plusJakartaSans } from "./WhyChooseUs";

export interface FAQProps {
  question: string;
  answer: string;
  id: number;
  className?: string;
}

export const FAQData = [
  {
    question: "How do I play an order with Verosa?",
    answer:
      "Nt. Nascetur tristique pretium nunc iaculis etiam. Ac ut ipsum magna in massa duis. Lorem ipsum dolor sit amet consectetur. Auctor dignissim sagittis massa faucibus ",
    id: 1,
  },

  {
    question: "Question 2?",
    answer:
      "Nt. Nascetur tristique pretium nunc iaculis etiam. Ac ut ipsum magna in massa duis. Lorem ipsum dolor sit amet consectetur. Auctor dignissim sagittis massa faucibus ",
    id: 2,
  },

  {
    question: "Question  3 for Verosa?",
    answer:
      "Nt. Nascetur tristique pretium nunc iaculis etiam. Ac ut ipsum magna in massa duis. Lorem ipsum dolor sit amet consectetur. Auctor dignissim sagittis massa faucibus ",
    id: 3,
  },

  {
    question: "How do I play an order with Verosa?",
    answer:
      "Nt. Nascetur tristique pretium nunc iaculis etiam. Ac ut ipsum magna in massa duis. Lorem ipsum dolor sit amet consectetur. Auctor dignissim sagittis massa faucibus ",
    id: 4,
  },

  {
    question: "How do I play an order with Verosa?",
    answer:
      "Nt. Nascetur tristique pretium nunc iaculis etiam. Ac ut ipsum magna in massa duis. Lorem ipsum dolor sit amet consectetur. Auctor dignissim sagittis massa faucibus ",
    id: 5,
  },
];

const FAQ: React.FC<FAQProps> = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col gap-6 md:gap-10 w-[90%] md:w-[752px] border-b border-black pb-5 ${plusJakartaSans.className}`}
    >
      <div
        className="flex justify-between items-center gap-4 w-full cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex gap-6 w-[85%]">
          <h1 className="text-2xl md:text-[32px] font-medium">0{id}</h1>
          <h3 className="  text-2xl  md:text-[32px] font-medium">{question}</h3>
        </div>
        <div
          className={`w-12 h-12 flex justify-center items-center ${
            isOpen ? "bg-[#FFAE38]" : "bg-[#BBBBBB]"
          }`}
        >
          {isOpen ? <Minus /> : <Plus />}
        </div>
      </div>
      {isOpen && <p className={` text-[18px] md:text-2xl`}>{answer}</p>}
    </div>
  );
};

const FAQList = () => {
  return (
    <div className="flex flex-col md:flex-col gap-[39px]  items-center  justify-center md:py-8 px-3 mx-auto md:mx-0 md:px-16">
      {" "}
      <h1 className="text-2xl md:text-4xl text-center font-medium">
        Frequently Asked Questions
      </h1>
      {FAQData.map((faq) => (
        <FAQ
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          id={faq.id}
        />
      ))}
    </div>
  );
};

export default FAQList;
