import React from "react";
import Image from "next/image";
import img1 from "@/assets/promise-1.jpeg";
import img2 from "@/assets/promise-2.jpeg";
import img3 from "@/assets/promise-3.jpeg";
import img4 from "@/assets/promise-4.jpeg";
import img5 from "@/assets/promise-5.jpeg";

const Promises = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-[72px] border-t border-b items-center  border-[#D5C0C5] justify-center py-4 md:py-8 px-3 mx-auto md:mx-0 md:px-16">
      <h1 className="font-medium text-2xl md:text-5xl">Our Promises</h1>{" "}
      <div className="flex justify-between items-center gap-[10.17px] md:gap-[74px]">
        <div className="w-[60.67px] md:w-[200px] flex  border-[0.85px] border-[#D5C0C58A] rounded-full ">
          <Image
            src={img1}
            alt={""}
            className="w-full h-[60.67px]  md:h-[200px]  object-cover rounded-full"
          />
        </div>
        <div className="w-[60.67px] md:w-[200px] flex  border-[0.85px] border-[#D5C0C58A] rounded-full ">
          <Image
            src={img2}
            alt={""}
            className="w-full h-[60.67px]  md:h-[200px]  object-cover rounded-full"
          />
        </div>
        <div className="w-[60.67px] md:w-[200px] flex  border-[0.85px] border-[#D5C0C58A] rounded-full  ">
          <Image
            src={img3}
            alt={""}
            className="w-full h-[60.67px]  md:h-[200px]  object-cover rounded-full"
          />
        </div>
        <div className="w-[60.67px] md:w-[200px] flex  border-[0.85px] border-[#D5C0C58A] rounded-full ">
          <Image
            src={img4}
            alt={""}
            className="w-full h-[60.67px]  md:h-[200px]  object-cover rounded-full"
          />
        </div>
        <div className="w-[60.67px] md:w-[200px] flex  border-[0.85px] border-[#D5C0C58A] rounded-full ">
          <Image
            src={img5}
            alt={""}
            className="w-full h-[60.67px]  md:h-[200px]  object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Promises;
