import Image from "next/image";
import React from "react";
import hero1 from "../../assets/Hero1.jpeg";
import hero2 from "../../assets/Hero2.jpeg";
import ArrorRight from "../Icons/ArrorRight";

const Herosection = () => {
  return (
    <div className="py-1 px-3 md:px-16 min-w-[390px] max-w-[1440px] mx-auto flex justify-center items-center flex-col gap-6">
      <div className="flex justify-between md:items-center md:gap-[19px] w-full">
        <div className="w-[174px] md:w-[535px] flex flex-col gap-6  ">
          <Image
            src={hero1}
            alt={""}  
            className=" w-full h-[172px] md:h-[720px] object-cover "
          />
          <h1 className="font-semibold text-2xl xl:hidden">
            Radiance & Refinement
          </h1>
        </div>
        <div className=" hidden md:flex justify-center items-start flex-col w-[21.8%] gap-8">
          <h1 className="font-semibold text-[48px] ">Radiance & Refinement</h1>
          <h1 className="text-[24px] ">
            Step into the world of Elysian Gems, where beauty meets
            craftsmanship
          </h1>
          <button className="flex w-[184px] h-[56px] rounded-[6px] border border-black px-[18px] py-3 justify-between items-center text-2xl font-semibold">
            Discover
            <ArrorRight />
          </button>
        </div>
        <div className="w-[171px] md:w-[424px] flex flex-col gap-6 ">
          <Image
            src={hero2}
            alt={""}
            className="w-full h-[172px]  md:h-[720px]  object-cover "
          />
          <h1 className="text-[12px] md:hidden">
            Step into the world of Elysian Gems, where beauty meets
            craftsmanship
          </h1>
        </div>
      </div>
      <button className="flex sm:hidden w-[161px] h-[41px] rounded-[6px] border border-black px-[18px] py-3 justify-center items-center  text-[16px] font-medium">
        Discover
        <ArrorRight />
      </button>
    </div>
  );
};

export default Herosection;
