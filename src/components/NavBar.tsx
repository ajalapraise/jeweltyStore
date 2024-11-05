import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/Verosa_Logo.png";
import facebook from "@/components/Icons/facebook.png";
import instagram from "@/components/Icons/instagram.png";
import twitter from "@/components/Icons/twitter.png";
import Menu from "./Icons/Menu";

const NavBar = () => {
  return (
    <div className="min-w-[390px] bg-black h-[59px] md:h-[114px] flex justify-between items-center    text-white overflow-hidden">
      <div className="border-b-[0.5px] border-[#D5C0C5] md:border-none w-full flex justify-between py-2 items-center md:gap-[170px]  px-4 md:px-8">
        <div className="md:hidden">
          <Menu />
        </div>
        <div className="hidden md:flex max-w-[30.35%] h-[52px] justify-between items-center">
          <Link
            href="#"
            className="border-r-[1.5px] border-[#D5C0C5] py-[10px] px-3 text-2xl"
          >
            Home
          </Link>
          <Link
            href="#"
            className="border-r-[1.5px] border-[#D5C0C5] py-[10px] px-3 text-2xl"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="border-r-[1.5px] border-[#D5C0C5] py-[10px] px-3 text-2xl"
          >
            Collections
          </Link>
          <Link
            href="#"
            className="border-r-[1.5px] border-[#D5C0C5] py-[10px] px-3 text-2xl"
          >
            Blogs
          </Link>
        </div>
        <Link
          href="/"
          className=" w-[77.59px] h-[27px] md:w-[235.63px] md:h-[82px]"
        >
          <Image
            src={logo}
            alt=""
            className="object-center object-contain w-full h-full"
          />
        </Link>
        <div className="hidden md:flex justify-evenly gap-[19px] items-center w-[21%] h-[52px]">
          <h1 className="border-r-[1.5px] border-[#D5C0C5] py-[10px] px-3 text-2xl">
            Contact Us
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
      </div>
    </div>
  );
};

export default NavBar;
