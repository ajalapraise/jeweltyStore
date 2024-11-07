import React, { Suspense, lazy } from "react";
const Herosection = lazy(() => import("@/components/HomePage/Herosection"));
const WhyChooseUs = lazy(() => import("@/components/HomePage/WhyChooseUs"));
const Gallery = lazy(() => import("@/components/HomePage/Gallery"));
const Promises = lazy(() => import("@/components/HomePage/Promises"));
const Quality = lazy(() => import("@/components/HomePage/Quality"));
const Reviews = lazy(() => import("@/components/HomePage/Reviews"));
const FAQ = lazy(() => import("@/components/HomePage/FAQ"));

const HomePage = () => {
  return (
    <div className=" min-w-[390px] max-w-[1440px] mx-auto w-full  overflow-hidden gap-6 flex flex-col pt-10 md:bg-[url('../assets/Home-bg.png')] h-full  bg-repeat">
      <Suspense fallback={<div></div>}>
        <Herosection />
        <WhyChooseUs />
        <Gallery />
        <Promises />
        <Quality />
        <Reviews />
        <FAQ />
      </Suspense>
    </div>
  );
};

export default HomePage;
