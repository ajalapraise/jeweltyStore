import React from "react";
import Image from "next/image";
import hero1 from "@/assets/aboutUs/hero1.jpeg";
import hero2 from "@/assets/aboutUs/hero2.jpeg";

const Herosection = () => {
  return (
    <div className="  w-full px-3 md:px-8 overflow-hidden gap-6 flex flex-col justify-between items-center md:gap-[20px] bg-[#FFF4E4] md:flex-row pt-10  border-b border-[#D5C0C5] py-10">
      {" "}
      <div className="flex justify-between md:gap-[176px] flex-col md:w-[535px] ">
        <h1 className="text-2xl md:text-4xl font-medium">About Verosa</h1>
        <p className="text-[18px] md:text-2xl">
          Lorem ipsum dolor sit amet consectetur. Auctor dignissim sagittis
          massa faucibus venenatis ultricies eget a ut. Nascetur tristique
          pretium nunc iaculis etiam. Ac ut ipsum magna in massa duis. Lorem
          ipsum dolor sit amet consectetur. Auctor dignissim sagittis massa
          faucibus venenatis ultricies eget a ut. Nascetur tristique pretium
          nunc iaculis etiam. Ac ut ipsum magna in massa duis.
        </p>
      </div>
      <div className="flex w-full md:w-[759px]  justify-evenly items-end md:gap-[20px]">
        <div className="w-[169px] md:w-[424px] flex flex-col gap-6 ">
          <Image
            src={hero1}
            alt={""}
            className="w-full h-[241px]  md:h-[544px]  object-cover "
          />
        </div>
        <div className="w-[169px] md:w-[315px] flex flex-col gap-6 ">
          <Image
            src={hero2}
            alt={""}
            className="w-full h-[153px]  md:h-[242px]  object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
