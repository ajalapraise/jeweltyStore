import Herosection from "@/components/AboutUs/Herosection";
import Story from "@/components/AboutUs/Story";
import Team from "@/components/AboutUs/Team";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FFF4E4]">
      <Herosection />
      <Story />
      <Team />
    </div>
  );
};

export default page;
