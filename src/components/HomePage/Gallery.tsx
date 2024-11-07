import React from "react";
import ArrorRight from "../Icons/ArrorRight";
import Image from "next/image";
import img1 from "@/assets/gallery-1.jpeg";
import img2 from "@/assets/gallery-2.jpeg";
import img3 from "@/assets/gallery-3.jpeg";
import img4 from "@/assets/gallery-4.jpeg";
import { plusJakartaSans } from "./WhyChooseUs";

const Gallery = () => {
  return (
    <div className="flex flex-col md:flex-col gap-[39px] border-0 md:border-t items-center  border-[#D5C0C5] justify-center md:py-8 px-3 mx-auto w-full md:px-16">
      <div className="flex justify-between items-center w-full">
        <h1 className="font-medium text-2xl md:text-5xl">
          Our collection gallery
        </h1>
        <button className="flex gap-[14px]  justify-between items-center text-[14.46px] md:text-2xl ">
          See All
          <ArrorRight />
        </button>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-evenly items-start gap-[19px]">
        <div className="flex flex-col gap-[20px] justify-start w-full items-start">
          <h1 className="font-medium text-2xl">01</h1>
          <div className="w-[358px] md:w-[313px] flex flex-col gap-6  cursor-pointer  transition-all ease-in-out duration-500 hover:w-[103%]">
            <Image
              src={img1}
              alt={""}
              className="w-full h-[365px]  md:h-[332px]  object-cover  hover:h-[360px] hover:object-center transition-all ease-in-out duration-500 "
            />
          </div>

          <h1 className={`font-medium text-2xl ${plusJakartaSans.className}`}>
            Verosa earrings
          </h1>
        </div>
        <div className="flex flex-col gap-[20px] justify-start w-full items-start">
          <h1 className="font-medium text-2xl">02</h1>
          <div className="w-[358px] md:w-[317px] flex flex-col gap-6 transition-all ease-in-out duration-500 hover:w-[103%]">
            <Image
              src={img2}
              alt={""}
              className="w-full h-[200px]  md:h-[200px]  object-cover hover:h-[230px] hover:object-center transition-all ease-in-out duration-500"
            />
          </div>
          <h1 className={`font-medium text-2xl ${plusJakartaSans.className}`}>
            Verosa Necklaces
          </h1>
        </div>
        <div className="flex flex-col gap-[20px] justify-start w-full items-start">
          <h1 className="font-medium text-2xl">03</h1>
          <div className="w-[358px] md:w-[313px] flex flex-col gap-6 cursor-pointer transition-all ease-in-out duration-500 hover:w-[103%]">
            <Image
              src={img3}
              alt=""
              className="w-full h-[332px] md:h-[332px] object-cover hover:h-[360px] hover:object-center transition-all ease-in-out duration-500"
            />
          </div>

          <h1 className={`font-medium text-2xl ${plusJakartaSans.className}`}>
            {" "}
            Verosa Couplebands
          </h1>
        </div>
        <div className="flex flex-col gap-[20px] justify-start w-full items-start">
          <h1 className="font-medium text-2xl">04</h1>
          <div className="w-[358px] md:w-[313px] flex flex-col  gap-6 transition-all ease-in-out duration-500 hover:w-[103%]">
            <Image
              src={img4}
              alt={""}
              className="w-full h-[200px]  md:h-[200px]  object-cover hover:h-[230px] hover:object-center transition-all ease-in-out duration-500"
            />
          </div>
          <h1 className={`font-medium text-2xl ${plusJakartaSans.className}`}>
            {" "}
            Bracelets
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
