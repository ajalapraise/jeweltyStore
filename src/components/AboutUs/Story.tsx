import React from "react";
import { plusJakartaSans } from "./../HomePage/WhyChooseUs";
import Image from "next/image";
import ArrorRight from "../Icons/ArrorRight";
import img1 from "@/assets/aboutUs/story1.png";
import img2 from "@/assets/aboutUs/story2.png";

const Story = () => {
  return (
    <div className="flex flex-col  w-full items-center gap-[56px] border-b  border-[#D5C0C5] justify-center py-4 md:py-8    md:px-8 bg-[#FFF4E4] ">
      <div className="flex justify-between flex-col md:flex-row md:items-center w-full md:w-[1320px]">
        <h1 className="md:text-2xl">Our Story</h1>
        <h1 className="font-medium text-2xl md:text-4xl">
          Our Essence & Purpose
        </h1>
      </div>
      <div className="md:w-[1320px] mx-auto">
        <div className="bg-black w-full  flex flex-col justify-between pb-5 md:flex-row">
          <div className=" w-full md:w-1/2 flex flex-col justify-start p-4 md:p-20 items-start gap-[45px] bg-[#FFAF35] text-black ">
            <h1 className="font-medium text-2xl md:text-4xl ">Our Mission</h1>
            <p
              className={`${plusJakartaSans.className} text-[18px] md:text-[32px]`}
            >
              Experience the excellence of Verosa&apos;s dedication to
              precision. Meticulously chosen diamonds combined with intricate
              designs and high quality craftsmanship.
            </p>
            <button className="flex w-[184px] h-[56px] gap-[27px] rounded-[6px] border py-3 px-[18px] border-black justify-between items-center text-2xl font-semibold">
              Discover
              <ArrorRight />
            </button>
          </div>
          <div className=" w-full md:w-1/2 flex justify-center s ">
            <Image
              src={img1}
              alt={""}
              className="w-[390px] md:w-fit h-[414px]  md:h-[624px] object-contain   "
            />
          </div>{" "}
        </div>
        <div className="bg-black w-full  flex flex-col justify-between pb-5 md:flex-row-reverse">
          <div className="w-full md:w-1/2 flex flex-col justify-start p-4 md:p-20 items-start gap-[45px]  text-white ">
            <h1 className="font-medium text-2xl md:text-4xl ">Our Vision</h1>
            <p
              className={`${plusJakartaSans.className} text-[18px] md:text-[32px]`}
            >
              Experience the excellence of Verosa&apos;s dedication to
              precision. Meticulously chosen diamonds combined with intricate
              designs and high quality craftsmanship.
            </p>
            <button className="flex w-[184px] h-[56px] gap-[27px] rounded-[6px] border py-3 px-[18px] border-white justify-between items-center text-2xl font-semibold">
              Discover
              <ArrorRight color="white" />
            </button>
          </div>
          <div className=" w-full md:w-1/2 flex justify-center s ">
            <Image
              src={img2}
              alt={""}
              className="w-[390px] md:w-full h-[414px]  md:h-[624px] object-contain"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Story;
