"use client";
import AllProducts from "@/components/Collections/AllProducts";
import NewProducts from "@/components/Collections/NewProducts";
import React from "react";

const page = () => {
  return (
    <div className="min-w-[390px] max-w-[1440px] mx-auto ">
      <div className="flex flex-col gap-6 md:flex-row justify-between w-full py-10 md:py-20 pt-10 px-3  border-b border-[#D5C0C5] md:px-2 ">
        <div className="md:w-[1308px] md:h-[160px] w-full flex justify-center  gap-6 md:gap-0 flex-col md:flex-row md:items-start mx-auto">
          <h1 className="md:w-1/2 text-2xl md:text-4xl">Verosa’s Collection</h1>
          <p className="md:w-1/2 text-lg md:text-2xl">
            . Ac ut ipsum magna in massa duis. Lorem ipsum dolor sit amet
            consectetur. Auctor dignissim sagittis massa faucibus venenatis
            ultricies eget a ut. Nascetur tristique pretium nunc iaculis etiam.
            Ac ut ipsum magna in massa duis.
          </p>
        </div>
      </div>
      <AllProducts />
      <NewProducts />
    </div>
  );
};

export default page;
