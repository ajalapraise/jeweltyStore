import FAQ from "@/components/HomePage/FAQ";
import Gallery from "@/components/HomePage/Gallery";
import Herosection from "@/components/HomePage/Herosection";
import Promises from "@/components/HomePage/Promises";
import Quality from "@/components/HomePage/Quality";
import Reviews from "@/components/HomePage/Reviews";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";
import React from "react";

const HomePage = () => {
  return (
    <div className=" min-w-[390px] max-w-[1440px] mx-auto w-full  overflow-hidden gap-6 flex flex-col pt-10 md:bg-[url('../assets/Home-bg.png')] h-full  bg-repeat">
      <Herosection />
      <WhyChooseUs />
      <Gallery />
      <Promises />
      <Quality />
      <Reviews />
      <FAQ />
    </div>
  );
};

export default HomePage;
