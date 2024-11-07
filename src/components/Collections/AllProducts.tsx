import React, { useState, useRef, useEffect } from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrorRight";
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
  { id: 1, name: "Verosa Couplebands", img: img1, type: "Earrings" },
  { id: 2, name: "Verosa Couplebands", img: img2, type: "Couplebands" },
  { id: 3, name: "Verosa Couplebands", img: img3, type: "Bracelets" },
  { id: 4, name: "Verosa Couplebands", img: img4, type: "Necklaces" },
  { id: 5, name: "Verosa Couplebands", img: img5, type: "Necklaces" },
  { id: 6, name: "Verosa Couplebands", img: img6, type: "Earrings" },
];

const AllProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredType, setFilteredType] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollOffset = currentIndex * 202;
      // @ts-expect-error: scrollTo not recognized on ref type
      scrollRef.current.scrollTo({ left: scrollOffset, behavior: "smooth" });
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % filteredCollections.length
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredCollections.length) %
        filteredCollections.length
    );
  };

  const filteredCollections = collections.filter(
    (collection) => filteredType === "All" || collection.type === filteredType
  );

  const handleFilter = (type: string) => {
    setFilteredType(type);
    setIsFilterOpen(false);
    setCurrentIndex(0);
  };

  return (
    <div className="flex flex-col mt-[20px] md:mt-[100px] w-full items-center md:gap-[56px] justify-center py-4 md:py-2">
      <div className="md:border-b border-[#D5C0C5] w-full md:pb-10">
        <div className="w-full px-8 hidden md:flex">
          <ul className="flex justify-start items-center gap-8 md:w-[866px] px-8 w-full h-10">
            {["All", "Earrings", "Bracelets", "Necklaces", "Couplebands"].map(
              (type) => (
                <li
                  key={type}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleFilter(type)}
                  className={`text-[32px] cursor-pointer ${
                    filteredType === type ? "text-black" : "text-[#0000009C]"
                  }`}
                  onKeyDown={(e) => e.key === "Enter" && handleFilter(type)}
                >
                  {type}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex justify-between md:hidden relative px-8">
          <h1 className={`${plusJakartaSans.className} text-2xl`}>
            {filteredType}
          </h1>
          <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="">
            <Filter />
          </button>
          {isFilterOpen && (
            <div className="absolute top-10 right-5 bg-white shadow-lg rounded-md py-2 z-10">
              {["All", "Earrings", "Bracelets", "Necklaces", "Couplebands"].map(
                (type) => (
                  <button
                    key={type}
                    className="block px-4 py-2 text-left text-black hover:bg-gray-100 w-full"
                    onClick={() => handleFilter(type)}
                  >
                    {type}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between md:hidden w-[374px] overflow-hidden mt-5">
        <div
          ref={scrollRef}
          className="flex gap-[20px] overflow-x-scroll w-full snap-x scroll-smooth"
        >
          {filteredCollections.map((collection, index) => (
            <div
              key={collection.id}
              className={`snap-center w-[202px] flex-shrink-0 ${
                index === currentIndex ? "opacity-100" : "opacity-50"
              }`}
            >
              <Image
                src={collection.img}
                alt={collection.name}
                className="h-[295px] w-full"
              />
              <h1
                className={`${plusJakartaSans.className} text-lg font-medium`}
              >
                {collection.name}
              </h1>
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
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="hidden md:flex  flex-wrap md:flex-nowrap md:gap-[20px] justify-start md:w-[1312px] pt-[20px] overflow-hidden">
        {filteredCollections.map((collection) => (
          <div
            key={collection.id}
            className="flex flex-col md:flex-row items-center justify-center"
          >
            <div className="w-[202px] flex justify-center items-start flex-col gap-[17px] hover:gap-0 cursor-pointer transition-all ease-in-out duration-500 hover:w-[101%]">
              <Image
                src={collection.img}
                alt={collection.name}
                className="h-[359px] object-contain hover:h-[300px] hover:object-center transition-all ease-in-out duration-500"
              />
              <h1
                className={`${plusJakartaSans.className} text-lg font-medium`}
              >
                {collection.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
