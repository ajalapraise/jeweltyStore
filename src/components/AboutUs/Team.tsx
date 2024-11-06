import React, { useState, useRef, useEffect } from "react";
import img1 from "@/assets/aboutUs/team1.png";
import img2 from "@/assets/aboutUs/team2.png";
import img3 from "@/assets/aboutUs/team3.png";
import img4 from "@/assets/aboutUs/team4.png";
import Image from "next/image";
import ArrorRight from "../Icons/ArrorRight";
import ArrowLeft from "../Icons/ArrowLeft";
import { plusJakartaSans } from "../HomePage/WhyChooseUs";

const team = [
  {
    id: 1,
    name: "Jane Cooper",
    img: img1,
  },
  {
    id: 2,
    name: "Dianne Russell",
    img: img2,
  },
  {
    id: 3,
    name: "Kristin Watson",
    img: img3,
  },
  {
    id: 4,
    name: "Robert Fox",
    img: img4,
  },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollOffset = currentIndex * 202;
      //@ts-expect-error: scrollTo not recognized on ref type
      scrollRef.current.scrollTo({ left: scrollOffset, behavior: "smooth" });
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
  };
  return (
    <div className="flex flex-col w-full items-center md:gap-[56px] border-b  border-[#D5C0C5] justify-center py-4 md:py-8 bg-[#FFF4E4]  md:px-8">
      <div className="flex justify-between flex-row items-center px-4 w-full md:w-[1316px] ">
        <h1 className="font-medium text- md:text-4xl">Meet the team</h1>
        <button className="flex gap-[14px] rounded-[6px]  py-3 px-[18px]  justify-between items-center md:text-2xl ">
          See All
          <ArrorRight />
        </button>
      </div>
      <div className="flex flex-col items-center justify-between md:hidden px-4 w-[374px] overflow-hidden mt-5">
        <div
          ref={scrollRef}
          className="flex gap-[20px] overflow-x-scroll w-full  snap-x scroll-smooth"
        >
          {team.map((team) => (
            <div key={team.id} className="snap-center w-[261px] flex-shrink-0">
              <Image
                src={team.img}
                alt={team.name}
                className="h-[240px] w-full"
              />
              <h1 className={`${plusJakartaSans.className} text-lg font-medum`}>
                {team.name}
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

      <div className="hidden md:flex flex-wrap gap-[13px] justify-start w-[1294px]">
        {team.map((member) => (
          <div key={member.id} className="flex  items-start justify-start">
            <div className=" w-[313px] flex justify-center items-start flex-col gap-4">
              <Image
                src={member.img}
                alt={""}
                className="h-[240px] object-center "
              />
              <h1 className=" text-2xl">{member.name}</h1>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
