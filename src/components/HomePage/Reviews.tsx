import React from "react";
import { plusJakartaSans } from "./WhyChooseUs";
import Image from "next/image";
import Star from "../Icons/Star";
import img1 from "@/assets/pp-1.jpeg";
import img2 from "@/assets/pp-2.jpeg";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrorRight from "../Icons/ArrorRight";

const Reviews = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-[72px] border-t border-b items-center  border-[#D5C0C5] justify-center py-4 md:py-8   md:mx-0 md:px-16">
      <div className="flex w-full flex-col md:flow-row justify-start items-start px-4 gap-10">
        <div className="flex justify-center w-full md:justify-between md:items-center flex-col md:flex-row">
          <h1 className="md:texx-2xl">Customer Reviews</h1>
          <h1 className="text-2xl md:text-4xl font-medium">
            See what our customers say
          </h1>
        </div>
        <div className="flex justify-center gap-20 items-center w-full">
          <div
            className={`${plusJakartaSans.className} md:w-[580px]  md:flex flex-col justify-between items-start gap-[35px] hidden md:border-l border-[#D5C0C5] px-10`}
          >
            <h1 className="text-[18px] font-medium md:font-normal md:text-[24px]">
              Jan 18th 2024
            </h1>
            <p className="font-medium  md:text-[24px]">
              {" "}
              recently purchased a beautiful piece of jewelry from this store,
              and I couldn’t be happier! The craftsmanship is absolutely
              stunning, and the attention to detail is remarkable. The staff was
              incredibly helpful and made the entire shopping experience a
              breeze. From the moment I walked in, I felt welcomed and taken
              care of. The jewelry I bought is not only elegant but also feels
              so unique. I will definitely be coming back for more and
              recommending this store to all my friends. Thank you for such an
              amazing experience!&quot;
            </p>
            <div className="flex justify-start items-center gap-3">
              <div className="w-[60px] md:w-[100px] flex flex-col gap-6 rounded-full ">
                <Image
                  src={img2}
                  alt={""}
                  className="w-full h-[60px]  md:h-[100px]  object-cover rounded-full "
                />
              </div>
              <div>
                <h1 className={`${plusJakartaSans.className} font-medium`}>
                  Ravi Amol
                </h1>
                <div className="flex justify-between items-center gap-[2px]">
                  <Star />
                  <Star /> <Star /> <Star /> <Star />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${plusJakartaSans.className} md:w-[580px] flex flex-col justify-between items-start gap-[35px] md:border-l border-[#D5C0C5] md:px-10`}
          >
            <h1 className="text-[18px] font-medium md:font-normal md:text-[24px]">
              Jan 18th 2024
            </h1>
            <p className="font-medium  md:text-[24px]">
              {" "}
              recently purchased a beautiful piece of jewelry from this store,
              and I couldn’t be happier! The craftsmanship is absolutely
              stunning, and the attention to detail is remarkable. The staff was
              incredibly helpful and made the entire shopping experience a
              breeze. From the moment I walked in, I felt welcomed and taken
              care of. The jewelry I bought is not only elegant but also feels
              so unique. I will definitely be coming back for more and
              recommending this store to all my friends. Thank you for such an
              amazing experience!&quot;
            </p>
            <div className="flex justify-start items-center gap-3">
              <div className="w-[60px] md:w-[100px] flex flex-col gap-6 rounded-full ">
                <Image
                  src={img1}
                  alt={""}
                  className="w-full h-[60px]  md:h-[100px]  object-cover rounded-full "
                />
              </div>
              <div>
                <h1 className={`${plusJakartaSans.className} font-medium`}>
                  Harsh Jalodara
                </h1>
                <div className="flex justify-between items-center gap-[2px]">
                  <Star />
                  <Star /> <Star /> <Star /> <Star />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center gap-8">
          <button className="flex gap-[14px]  justify-between items-center text-[14.46px] md:text-2xl ">
            <ArrowLeft />
            Previous
          </button>
          <button className="flex gap-[14px]  justify-between items-center text-[14.46px] md:text-2xl ">
            Next
            <ArrorRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
