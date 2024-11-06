import React, { useState, useRef, useEffect } from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrorRight from "../Icons/ArrorRight";
import img1 from "@/assets/collections/col1.png";
import img2 from "@/assets/collections/col2.png";
import img3 from "@/assets/collections/col3.png";
import img4 from "@/assets/collections/col4.png";
import img5 from "@/assets/collections/col5.png";
import img6 from "@/assets/collections/col6.png";
import Image from "next/image";
import { plusJakartaSans } from "../HomePage/WhyChooseUs";
import Filter from "../Icons/Filter";

const collections = [
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
  {
    id: 5,
    name: " Verosa Couplebands",
    img: img5,
  },
  {
    id: 6,
    name: " Verosa Couplebands",
    img: img6,
  },
];

const AllProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollOffset = currentIndex * 202;
      //@ts-expect-error
      scrollRef.current.scrollTo({ left: scrollOffset, behavior: "smooth" });
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % collections.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + collections.length) % collections.length
    );
  };
  return (
    <div className="flex flex-col mt-[20px] md:mt-[100px] w-full  items-center md:gap-[56px]  justify-center py-4 md:py-2   ">
      <div className="md:border-b border-[#D5C0C5] w-full md:pb-10">
        <div className=" w-full px-8 hidden md:flex">
          <ul className="flex justify-start items-center gap-8 md:w-[866px] px-8 w-full h-10">
            <li className="text-[32px]">All</li>
            <li className="text-[32px] text-[#0000009C]">Earrings</li>
            <li className="text-[32px] text-[#0000009C]">Bracelets</li>
            <li className="text-[32px] text-[#0000009C]">Necklaces</li>
            <li className="text-[32px] text-[#0000009C]">Couplebands</li>
          </ul>
        </div>
        <div className="flex justify-between  md:hidden px-8">
          <h1 className={`${plusJakartaSans.className} text-2xl`}>All</h1>
          <Filter />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between md:hidden w-[374px] overflow-hidden mt-5">
        <div
          ref={scrollRef}
          className="flex gap-[20px] overflow-x-scroll w-full  snap-x scroll-smooth"
        >
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="snap-center w-[202px] flex-shrink-0"
            >
              <Image
                src={collection.img}
                alt={collection.name}
                className="h-[295px] w-full"
              />
              <h1 className={`${plusJakartaSans.className} text-lg font-medum`}>
                {collection.name}
              </h1>{" "}
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={handlePrevious}
            className="flex gap-[14px] rounded-[6px] py-3 px-[18px] items-center text-2xl"
          >
            <ArrowLeft />
            Previous
          </button>
          <button
            onClick={handleNext}
            className="flex gap-[14px] rounded-[6px] py-3 px-[18px] items-center text-2xl"
          >
            Next
            <ArrorRight />
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-wrap gap-[20px] justify-start md:w-[1312px] pt-[20px]">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="flex flex-col md:flex-row items-center justify-center"
          >
            <div className=" w-[202px] flex justify-center items-start flex-col gap-[17px]">
              <Image
                src={collection.img}
                alt={""}
                className="h-[359px] object-contain   "
              />
              <h1 className={`${plusJakartaSans.className} text-lg font-medum`}>
                {collection.name}
              </h1>
            </div>{" "}
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default AllProducts;
