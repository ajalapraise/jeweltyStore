import React from "react";
import Image from "next/image";
import img1 from "@/assets/quality.jpeg";
import ArrorRight from "../Icons/ArrorRight";
import { plusJakartaSans } from "./WhyChooseUs";

const Quality = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-[72px]  items-center  border-[#D5C0C5] justify-center py-4 md:py-8   md:mx-0 md:px-16">
      <div className="bg-black w-full  flex flex-col px-8 pb-5 md:flex-row">
        <div className=" w-full md:w-1/2 ">
          <Image
            src={img1}
            alt={""}
            className="w-[390px] md:w-[655px] h-[414px]  md:h-[624px]  object-cover rounded-full"
          />
        </div>{" "}
        <div className="text-white w-full md:w-[543px] flex flex-col justify-center items-start gap-[45px]">
          <h1 className="font-medium text-2xl md:text-4xl ">
            Why Quality Matters
          </h1>
          <p
            className={`${plusJakartaSans.className} text-[18px] md:text-[32px]`}
          >
            Experience the excellence of Verosa&apos;s dedication to precision.
            Meticulously chosen diamonds combined with intricate designs and
            high quality craftsmanship.
          </p>
          <button className="flex w-[184px] h-[56px] gap-[27px] rounded-[6px] border py-3 px-[18px] border-white justify-between items-center text-2xl font-semibold">
            Discover
            <ArrorRight color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quality;
