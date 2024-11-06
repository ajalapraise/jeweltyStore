import React from "react";
import img1 from "@/assets/collections/new1.png";
import img2 from "@/assets/collections/new2.png";
import img3 from "@/assets/collections/new3.png";
import img4 from "@/assets/collections/new4.png";
import { plusJakartaSans } from "../HomePage/WhyChooseUs";
import Image from "next/image";
import img5 from "@/assets/collections/new5.png";

const newCollectons = [
  {
    id: 1,
    name: " Verosa Couplebands",
    img: img1,
  },
  {
    id: 2,
    name: " Verosa Couplebands",
    img: img2,
  },
  {
    id: 3,
    name: " Verosa Couplebands",
    img: img3,
  },
  {
    id: 4,
    name: " Verosa Couplebands",
    img: img4,
  },
];

const NewProducts = () => {
  return (
    <div className="flex flex-col mt-[20px] md:mt-[100px]  items-center md:gap-[56px]  justify-center py-4 md:py-2   ">
      <div className="md:border-b border-[#D5C0C5] w-full">
        <div className="flex justify-between flex-col  md:w-[1320px] md:flex-row md:items-center mx-auto w-full md:pb-10 px-4 gap-4 md:gap-0 ">
          <h1 className="md:text-2xl">New Products</h1>
          <h1 className="font-medium text-2xl md:text-4xl">
            Newly added to collection
          </h1>
        </div>{" "}
      </div>{" "}
      <div className="flex justify-between md:w-[1320px] mb-10 md:mb-60">
        <div className="flex flex-wrap gap-[20px] justify-center w-[392px] md:w-[868px] pt-[20px] md:py-0">
          {newCollectons.map((collection) => (
            <div
              key={collection.id}
              className="flex flex-row flex-wrap items-center justify-center"
            >
              <div className="w-[170px] md:w-[424px] flex justify-center items-start flex-col gap-[20px]">
                <Image
                  src={collection.img}
                  alt={""}
                  className="h-[150px] md:h-[340px]   "
                />
                <h1
                  className={`${plusJakartaSans.className} text-lg font-medum`}
                >
                  {collection.name}
                </h1>
              </div>{" "}
            </div>
          ))}
        </div>{" "}
        <div className="hidden md:flex w-[424px]">
          <div className=" w-[424px] flex justify-center items-start flex-col gap-[17px]">
            <Image
              src={img5}
              alt={""}
              className="h-[753px] object-contain   "
            />
            <h1 className={`${plusJakartaSans.className} text-lg font-medum`}>
              {" "}
              Verosa Couplebands
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
