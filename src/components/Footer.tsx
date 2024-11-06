import React from "react";
import { plusJakartaSans } from "../components/HomePage/WhyChooseUs";
import facebook from "@/components/Icons/facebook.png";
import instagram from "@/components/Icons/instagram.png";
import twitter from "@/components/Icons/twitter.png";
import Link from "next/link";
import Image from "next/image";
import ArrorRight from "./Icons/ArrorRight";

const Footer = () => {
  return (
    <div className="min-w-[390px] max-w-[1440px] mx-auto  bg-black gap-10  flex flex-col justify-between items-center  text-white overflow-hidden  px-4 md:px-10 py-10 md:py-[30px]">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 w-full">
        <div className="md:w-[337px] flex flex-col justify-between gap-[22px]">
          <h1 className="text-2xl md:text-[32px]">Contact</h1>
          <h1
            className={`${plusJakartaSans.className} textt-[18px] md:text-2xl`}
          >
            3891 Ranchview Dr. Richardson, California 62639
          </h1>
          <div className="flex w-[142px]  h-10 gap-[11px] justify-between items-center">
            <Link
              href="#"
              className="w-10 h-10 p-[2px] rounded-[29px] border flex justify-center items-center border-[#D5C0C5]"
            >
              <Image
                src={facebook}
                alt=""
                className="object-center object-contain w-6 h-6"
              />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 p-[2px] rounded-[29px] border flex justify-center items-center border-[#D5C0C5]"
            >
              <Image
                src={twitter}
                alt=""
                className="object-center object-contain w-6 h-6"
              />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 p-[2px] rounded-[29px] border flex justify-center items-center border-[#D5C0C5]"
            >
              <Image
                src={instagram}
                alt=""
                className="object-center object-contain w-6 h-6"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-start flex-col md:flex-row gap-10 md:gap-[49px]">
          <div className="flex flex-col gap-6 justify-between">
            <h1 className="text-2xl md:text-[32px]">Quick Links</h1>
            <ul className="flex flex-col justify-between items-start gap-[3px]">
              <li>Home</li>
              <li>About Us</li>
              <li>Collections </li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 justify-between items-start md:w-[315px]">
            <h1 className="text-2xl md:text-[32px]">Sign Up</h1>
            <p className="md:text-2xl ">
              Subscribe to our news letters to get the larestupdates
            </p>
            <div className="py-4 px-[10px] flex  justify-between items-center gap-[10px] border border-white">
              <input
                type="email"
                placeholder="Email address"
                className="bg-black"
              />

              <button className="w-[41px] h-8 bg-[#FFAD39] flex justify-center items-center">
                <ArrorRight />
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
      <div
        className={`flex justify-between flex-col md:flex-row md:text-2xl md:items-center w-full ${plusJakartaSans.className}`}
      >
        <h1>Copyright@2024</h1>
        <div className="flex flex-col md:flex-row justify-between md:gap-6">
          <h1>Privacy policy</h1>
          <h1>Terms of service</h1>
        </div>
      </div>
      <h1 className="flex justify-center items-center font-semibold text-[94.96px] md:text-[350px]">
        Verosa
      </h1>
    </div>
  );
};

export default Footer;
