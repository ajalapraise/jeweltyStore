import React from "react";
import ArrorRight from "../Icons/ArrorRight";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plus-jakarta",
});

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row  border-t  border-[#D5C0C5] justify-center md:py-8 px-3 md:px-8">
      <div className="flex md:w-[424px] justify-center items-center flex-col h-[198px] py-8 md:py-[34px] md:px-[36px] px-4 gap-4  border-t md:border-r md:border-black md:border-t-0 md:border-b-0 border-b border-[#D5C0C5]">
        <h1 className={`font-semibold ${plusJakartaSans.className}`}>
          Why choose Us?
        </h1>
        <h2 className="text-2xl text-center">
          Lorem ipsum dolor sit amet ipsum dolor amet
        </h2>
        <button className="flex w-[141px]  justify-between items-center  text-[16px] ">
          More about us
          <ArrorRight />
        </button>
      </div>
      <div className="flex md:w-[424px] justify-center items-center flex-col h-[198px] py-8 px-4 gap-4  md:py-[34px] md:px-[36px]  border-b md:border-r md:border-black md:border-t-0 md:border-b-0 border-[#D5C0C5]">
        <h1 className={`font-semibold ${plusJakartaSans.className}`}>
          Our collection
        </h1>
        <h2 className="text-2xl text-center">
          Lorem ipsum dolor sit amet ipsum dolor amet
        </h2>
        <button className="flex w-[141px]  justify-between items-center  text-[16px] ">
          See collection
          <ArrorRight />
        </button>
      </div>
      <div className="flex md:w-[424px] justify-center items-center flex-col h-[198px] py-8 px-4 gap-4  md:py-[34px] md:px-[36px] border-b md:border-r md:border-black md:border-t-0 md:border-b-0 border-[#D5C0C5]">
        <h1 className={`font-semibold ${plusJakartaSans.className}`}>
          Custom Jewelry
        </h1>
        <h2 className="text-2xl text-center">
          Lorem ipsum dolor sit amet ipsum dolor amet
        </h2>
        <button className="flex w-[141px]  justify-between items-center  text-[16px] ">
          More about us
          <ArrorRight />
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
