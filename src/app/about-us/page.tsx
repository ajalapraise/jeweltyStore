"use client";
import Herosection from "@/components/AboutUs/Herosection";
import Story from "@/components/AboutUs/Story";
import Team from "@/components/AboutUs/Team";
import React from "react";

const page = () => {
  return (
    <div className="min-w-[390px] max-w-[1440px] mx-auto ">
      <Herosection />
      <Story />
      <Team />
    </div>
  );
};

export default page;
